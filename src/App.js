import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement} from './actions';
import NavBar from "./Nav/NavBar";
import { AppHeader,FlexContainer,GlobalStyle } from "./Styles/NavBar.styles";
import ContractAbi from './Contract/ContractAbi.json';
// import BscContract from './Contract/ContractAbi.json'
import { BigNumber } from "bignumber.js";


function App() {
  const [accounts,setAccounts] = useState('');
  const [chainid,setChainId] = useState();
  const [getBalance,SetGetBalanced] = useState(); 
  const [name,setName] = useState(); 

  const counter = useSelector(state => state.counters) 

  const distpatch = useDispatch();
  var web3;
  const ContractAddress = "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72";
  // const bscContractAddress = "0xC434ff4C2e743d80adF5837029368Eb4dE270453";

  useEffect(() => {
    async function init(){
      var ethereum = await detectEthereumProvider();
     var web3 = new Web3(window.ethereum);
      web3.currentProvider.on("accountsChanged", async function () {
        let accounts = await web3.eth.getAccounts();
        var networkId = await web3.eth.net.getId();
        setAccounts(accounts);
        setChainId(networkId);       
      });
      ethereum.on('chainChanged', (chainId) => {
        setChainId(chainId)
      });
      var Contract = new web3.eth.Contract(ContractAbi,ContractAddress);
      var ContractName = await Contract.methods.name().call();
      setName(ContractName)
      console.log(ContractName,'ContractName---------------')
    }
    init()
  },[accounts])


  var  metamaskConnect = async () =>{  
    const ethereum = await detectEthereumProvider();
    web3 = new Web3(window.ethereum);
    const account = await ethereum.request({ method: 'eth_requestAccounts' });
    setAccounts(account[0]);
    const chainid = await web3.eth.net.getId();
    setChainId(chainid)
    console.log(web3.currentProvider,'currentProvider');  
 
  }

  var metaMaskDissconnect = async () => {
    web3 = new Web3(window.ethereum);
     await web3.currentProvider._handleDisconnect();
     localStorage.clear();
     setAccounts('')
     setChainId('')
     window.location.reload();
  }
 
  var getBalanced = async () => {
    web3 = new Web3(window.ethereum);
    var balance = await web3.eth.getBalance(accounts) 
    var ethBalance = await web3.utils.fromWei(balance,'ether')
    SetGetBalanced(ethBalance);
 }

 const changeNetwork = async (chainId) => {
  if (window.ethereum) {
    try {
       await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],      
      });
    } catch (error) {
      window.location.reload();
    }
  }
};

let x = new BigNumber(123).plus(10);
console.log(x.MAX_SAFE_INTEGER,'BigNumber--------------',)

  return (
    <>   
      <GlobalStyle whiteColor/>
      <NavBar/> 
        <FlexContainer>
        <AppHeader>        
          {typeof window.web3 !== 'undefined' ?  
          <>
            'MetaMask is installed!'
            <button style={{display:'block'}} onClick={metamaskConnect}>
              Connect To MetaMask
            </button>
            <div>
              Address:-{accounts !== 'undefined' && accounts}
            </div>
            <div>
              Chain Id:-{chainid !== 'undefined' && chainid}
            </div>  
            {accounts !== '' && 
            <>
              <button style={{display:'block'}} onClick={metaMaskDissconnect}>
                Dissconnect From MetaMask   
              </button> 
              <button style={{display:'block'}} onClick={getBalanced}>
                Get Account Balanced  
              </button> 
              {getBalance}
                </>
              }   
              <h2>counter{counter}</h2>
              <button onClick={()=> distpatch(increment())}>+</button>
              <button onClick={()=> distpatch(decrement())}>-</button>

    
            <select onChange={(event)=>changeNetwork(event.target.value)}>
              <option value="" hidden>
                Switch Newtork
              </option>
              <option value="0x1">Ethereum Mainnet</option>
              <option value="0x38">BSC</option>
              <option value="0x89">Polygon</option>   
            </select > 
              {x.toNumber()}
              <div>
                {name && name}
              </div>
        </>
          :
          'MetaMask is not installed!'          
          }
        </AppHeader>
        </FlexContainer>
    </>
  );
}

export default App;
