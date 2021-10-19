import './App.css';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import React, { useState,useEffect } from 'react';



function App() {
  useEffect( async () => {
    const ethereum = await detectEthereumProvider();
    web3 = new Web3(window.ethereum);
    web3.currentProvider.on("accountsChanged", async function () {
      let accounts = await web3.eth.getAccounts();
      setAccounts(accounts)
      console.warn(accounts);
    });
  })

  let web3;
  const [accounts,setAccounts] = useState();
  const [chainid,setChainId] = useState();
  web3 = new Web3(window.ethereum);

  var  metamaskConnect = async () =>{  
    const ethereum = await detectEthereumProvider();
    web3 = new Web3(window.ethereum);
    // window.ethereum.enable();

    const account = await ethereum.request({ method: 'eth_requestAccounts' });
    setAccounts(account[0]);
    const chainid = await web3.eth.getChainId();
    setChainId(chainid)
    const acc = await web3.eth.getAccounts()
    console.log(web3.currentProvider,'currentProvider'); 
    console.log(ethereum.isConnected()); 
  }

  var metaMaskDissconnect = async () => {
     await web3.currentProvider._handleDisconnect();
     localStorage.clear();
     setAccounts('')
     setChainId('')
     window.location.reload();
  }
 


  return (
    <div className="App">
      <header className="App-header">

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
        </>
        :
        'MetaMask is not installed!'          
        }

      </header>
    </div>
  );
}

export default App;
