import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment} from './actions';
import { decrement } from './actions';
import NavBar from "./Nav/NavBar";
import { AppHeader,FlexContainer,GlobalStyle } from "./Styles/NavBar.styles";


function App() {
  useEffect( async () => {
    const ethereum = await detectEthereumProvider();
    web3 = new Web3(window.ethereum);
    web3.currentProvider.on("accountsChanged", async function () {
      let accounts = await web3.eth.getAccounts();
      setAccounts(accounts)
      
    });
    console.warn(accounts,'----------------------------');
  },[])

  const counter = useSelector(state => state.counters)
  const loggedInn = useSelector(state => state.logged)
  const distpatch = useDispatch();

  let web3;
  const [accounts,setAccounts] = useState('');
  const [chainid,setChainId] = useState();
  const [getBalance,SetGetBalanced] = useState();

  web3 = new Web3(window.ethereum);

  var  metamaskConnect = async () =>{  
    const ethereum = await detectEthereumProvider();
    const account = await ethereum.request({ method: 'eth_requestAccounts' });
    setAccounts(account[0]);
    const chainid = await web3.eth.getChainId();
    setChainId(chainid)
    const acc = await web3.eth.getAccounts()
    console.log(web3.currentProvider,'currentProvider');    

  }

  var metaMaskDissconnect = async () => {
     await web3.currentProvider._handleDisconnect();
     localStorage.clear();
     setAccounts('')
     setChainId('')
     window.location.reload();
  }
 
  var getBalanced = async () => {
    var balance = await web3.eth.getBalance(accounts) 
    var ethBalance = await web3.utils.fromWei(balance,'ether')
    SetGetBalanced(ethBalance);
 }


  return (<>
   
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
          <button style={{display:'block'}} onClick={metaMaskDissconnect}>
            Dissconnect From MetaMask   
          </button> 
          {accounts !== '' && 
          <>
            <button style={{display:'block'}} onClick={getBalanced}>
              Get Account Balanced  
            </button> 
            {getBalance}
              </>
            }   
            <h2>counter{counter}</h2>
            <button onClick={()=> distpatch(increment())}>+</button>
            <button onClick={()=> distpatch(decrement())}>-</button>

            Logdin{loggedInn}
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
