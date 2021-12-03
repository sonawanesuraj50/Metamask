import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment,decrement} from '../actions';
import { AppHeader,FlexContainer } from "../Styles/NavBar.styles";
//import ContractAbi from './Contract/ContractAbi.json';
import BscContract from '../Contract/ContractAbi.json';
import { BigNumber } from "bignumber.js";
import { Button } from '../Styles/Button.styles';
import { Typography } from "../Styles/Typography.styles";

let web3: any;
declare let window: any;

function Home() {
  const [accounts,setAccounts] = useState<any>('');
  const [chainid,setChainId] = useState<any>();
  const [getBalance,SetGetBalanced] = useState<any>(); 
  const [name,setName] = useState<any>(); 
  
  const counter:any = useSelector((state:any) => state.counters) 

  const distpatch = useDispatch();

  //const ContractAddress = "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72";
  const bscContractAddress = "0x35C330cb11F9A6a0DBd4A9138B505a26eA00c5C0";

  useEffect(() => {
    async function init(){
    var ethereum:any = await detectEthereumProvider();
     web3 = new Web3(window.ethereum);
      web3.currentProvider.on("accountsChanged", async function () {
        let accounts = await web3.eth.getAccounts();
        var networkId = await web3.eth.net.getId();
        setAccounts(accounts);
        setChainId(networkId);       
      });
      ethereum.on('chainChanged', (chainId:any) => {
        setChainId(chainId)
      });
      var Contract = new web3.eth.Contract(BscContract,bscContractAddress);
      var ContractName = await Contract.methods.INIT_CODE_PAIR_HASH().call();

      setName(ContractName)
     // console.log(result,'sendConract---------------')
    }
    init()
  },[accounts,name])


  var  metamaskConnect = async () =>{  
    let ethereum:any = await detectEthereumProvider();
    web3 = new Web3(window.ethereum);
    let account = await ethereum.request({ method: 'eth_requestAccounts' });
    setAccounts(account[0]);
    let chainid = await web3.eth.net.getId();
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

 const changeNetwork = async (chainId:any) => {
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

const sendConracts = async()=> {
  web3 = new Web3(window.ethereum);
  var Contract = new web3.eth.Contract(BscContract,bscContractAddress);
  const result = await Contract.methods.createPool(
    "Suraj",
    "0x637F61C18Cd7259f7c5EA50591C7Befe6A2E0BfE",
    1637143135,
    10
  )
  .send({
    from: "0x560C4E192cEEeB948CCE7C26002A0E2934673216",
  });
  console.log(result)
}

let x = new BigNumber(123).plus(10);

  return (
    <> 
      <FlexContainer>
        <AppHeader>        
          {typeof window.web3 !== 'undefined' ?  
            <>
              <Typography>'MetaMask is installed!'</Typography>
              <Button style={{display:'block'}} onClick={metamaskConnect}>
                Connect To MetaMask
              </Button>
              <Typography>
                Address:-{accounts !== 'undefined' && accounts}
              </Typography>
              <Typography>
                Chain Id:-{chainid !== 'undefined' && chainid}
              </Typography>  
              {accounts !== '' && 
                <>
                  <Button error style={{display:'block'}} onClick={metaMaskDissconnect}>
                    Dissconnect From MetaMask   
                  </Button> 
                  <Button secondary style={{display:'block'}} onClick={getBalanced}>
                    Get Account Balanced  
                  </Button> 
                  <Typography>{getBalance}</Typography>
                </>
              }   
              <Typography>counter{counter}</Typography>
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
              <Button onClick={sendConracts}>Contract Intraction</Button>
              <Typography>{x.toNumber()}</Typography>
                <Typography>
                  {name && name}
                </Typography>
            </>
            :
            <Typography>'MetaMask is not installed!'</Typography>          
          }
        </AppHeader>
      </FlexContainer>
  </>
  );
}

export default Home;
