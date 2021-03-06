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
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from '@web3-react/injected-connector';

let web3: any;
declare let window: any;

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 56, 97, 42,137],
})


function Home() {
  const [accounts,setAccounts] = useState<any>('');
  const [chainid,setChainId] = useState<any>();
  const [getBalance,SetGetBalanced] = useState<any>(); 
  const [name,setName] = useState<any>();
  const [loading,setLoading] = useState(false);

  
  const counter:any = useSelector((state:any) => state.counters) 
  const { active, account, library, connector, activate, deactivate } = useWeb3React<any>() 
  const distpatch = useDispatch();

  //const ContractAddress = "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72";
  const bscContractAddress = "0x35C330cb11F9A6a0DBd4A9138B505a26eA00c5C0";

  useEffect(() => {
    async function init(){
      {localStorage.getItem("isactive") && await activate(injected)}
      
    var ethereum:any = await detectEthereumProvider();
     web3 = new Web3(window.ethereum);
      web3.currentProvider.on("accountsChanged", async function () {       
        console.log(active,'----------------a----------------------')
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
   
    }
    init()
  },[accounts,name])


  var  metamaskConnect = async () =>{  
    // let ethereum:any = await detectEthereumProvider();
    // web3 = new Web3(window.ethereum);
    // let account = await ethereum.request({ method: 'eth_requestAccounts' });
    try {
      setLoading(true);      
      await activate(injected)
      setAccounts(account);
      let chainid = await web3.eth.net.getId();
      setChainId(chainid)     
      console.log(account,library,'account','library'); 
      localStorage.setItem("isactive",JSON.stringify(true))
      setLoading(false); 
  } catch (ex) {
      console.log(ex)
  }  
  }

  var metaMaskDissconnect = async () => {
    //  web3 = new Web3(window.ethereum);
    //  await web3.currentProvider._handleDisconnect();
    //  localStorage.clear();
    //  setAccounts('')
    //  setChainId('')
    //  window.location.reload();
    //  console.log('dissconnect---')
    try {
      deactivate()  
      localStorage.setItem("isactive",JSON.stringify(false))
      localStorage.clear();
      setAccounts('')
      setChainId('')
      window.location.reload();
    } catch (ex) {
      console.log(ex)
    }
  }
 
  var getBalanced = async () => {
    // web3 = new Web3(window.ethereum);
    // var balance = await web3.eth.getBalance(accounts) 
    // var ethBalance = await web3.utils.fromWei(balance,'ether')
    library.eth.getBalance(account).then((balance:any)=>{
      SetGetBalanced(library.utils.fromWei(balance,'ether'));
    });   
 }

 const changeNetwork = async (chainId:any) => {
  if (window.ethereum) {
    try {
      setLoading(true);
       await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId }],      
      });
      setLoading(false);
    } catch (error) {
      window.location.reload();
    }
  }
};

const sendConracts = async()=> {
  //web3 = new Web3(window.ethereum);
  var Contract = new library.eth.Contract(BscContract,bscContractAddress);
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
                {loading ? <span>Loading...</span>  : <span>Connect To MetaMask</span>}
              </Button>
              <Typography>
                Address:-{account !== 'undefined' && account}
              </Typography>
              <Typography>
                Chain Id:-{chainid !== 'undefined' && chainid}
              </Typography>  
              {active && 
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
