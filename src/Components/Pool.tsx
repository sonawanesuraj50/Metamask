import React, { useEffect, useState } from 'react';
import { Button } from '../Styles/Button.styles';
import { CenterAlign, LiquidityCard,Add, HelpIcon, StyledButton } from '../Styles/Cards.styles';
import { Typography } from '../Styles/Typography.styles';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import { withWeb3 } from 'web3-react'
import PoolAbi from '../Contract/PoolAbi.json';
import { BigNumber } from "bignumber.js";


let web3: any;
declare let window: any;

function Pool(){
    const [provider,setProvider] = useState<any>();
    const [connect,setConnect] = useState<Boolean>(Boolean);  
    const [firstTokenValue, setFirstTokenValue] = useState('');
    const [secondTokenValue, setSecondTokenValue] = useState('');
    const [chainId,setChainId] = useState<String>(String);
    const PollContractAddress = "0xBEDa4Ea077766b43092397B0AE7D53bC999561eB";

    useEffect(() => {
       async function init(){
            const provider:any = await detectEthereumProvider();
            setProvider(provider); 
            setConnect(provider?.isConnected());
            web3 = new Web3(window.ethereum);
            var Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);
            var ContractName = await Contract.methods.factory().call();
            console.warn(ContractName,'------------contractName---------')
            setChainId(provider?.chainId);
            provider.on('chainChanged', (chainId:any) => {
                setChainId(chainId)
              });
        }
        init();        
      },[provider,chainId]);
      console.log(provider?.isConnected(),'---isConnected')
      //console.log(withWeb3)

      const metamaskConnect = async () =>{  
        const ethereum:any = await detectEthereumProvider();
        web3 = new Web3(window.ethereum);
        let account = await ethereum.request({ method: 'eth_requestAccounts' });
        if(account != 'undefined')
        {
            setConnect(true)
        }
      }

      const firstInput = async (e:any) => { 
        setFirstTokenValue(e.target.value)       
        web3 = new Web3(window.ethereum);
        var Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);
        const reserve0 = new BigNumber('66624601573058294884574');
        const reserve1 = new BigNumber('166276833826927710576895');
        const secondValue = await Contract.methods.quote(
           e.target.value,
           reserve0.toFixed(),
           reserve1.toFixed()
        ).call();       
        setSecondTokenValue(secondValue)
        console.log(secondValue,'------second Value---------')
      }

      const secondInput = async (e:any) => {
        console.log('SecondInput--') 
        setSecondTokenValue(e.target.value)
        web3 = new Web3(window.ethereum);
        const Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);
        const reserve0 = new BigNumber('166276833826927710576895');
        const reserve1 = new BigNumber('66624601573058294884574');
        const firstValue = await Contract.methods.quote(
            e.target.value,
            reserve0.toFixed(),
            reserve1.toFixed()
         ).call();      
         console.log(firstValue,'-*----------') 
        setFirstTokenValue(firstValue) 
      }

      const addLiquidity = async () => {
        web3 = new Web3(window.ethereum);
        const Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);  
        await Contract.methods.addLiquidity(
          new BigNumber('0x637f61c18cd7259f7c5ea50591c7befe6a2e0bfe').toString(),
          new BigNumber('0x6e03884333a30ee91afda92e429ff4fd95dc2850').toString(),
           firstTokenValue,
           secondTokenValue,
           1,
           2,
           new BigNumber('0x62F2a8B0B45826dD410ABB3ac6476E1c4B6d25aa').toFixed(),
           10
         ).send();    
      }

      const SwitchBNBTestnet = async () =>{
        if (window.ethereum) {
            try {
               await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId:"0x61" }],                   
              });
              const provider:any = await detectEthereumProvider();
              setChainId(provider?.chainId);   
            } catch (error) {
              window.location.reload();
            }
          }
      }

    return(
        <>
        {typeof window.web3 !== 'undefined' ?
            <CenterAlign>
                <LiquidityCard>
                    <header>
                        Add Liquidity
                        <HelpIcon />
                    </header>
                    <text>
                        <Typography>BUSD-BUST</Typography>
                        <Typography>Balance:</Typography>
                    </text>
                    <input 
                        type="text" 
                        disabled={chainId!=="0x61"} 
                        placeholder="BUSD" 
                        value={firstTokenValue} 
                        onChange={firstInput}
                    />  
                    <Add />          
                    <input 
                        type="text" 
                        placeholder="BUST"
                        disabled={chainId!=="0x61"} 
                        value={secondTokenValue} 
                        onChange={secondInput}
                    />
                    {connect ?
                        <>
                            {chainId !== "0x61" ?
                              <StyledButton 
                                width="100%" 
                                onClick={SwitchBNBTestnet}
                               >
                                Switch to BNB Testnet
                              </StyledButton>
                            :
                                <StyledButton 
                                    width="100%" 
                                    onClick={addLiquidity}
                                >
                                    Ad Liquidity
                                </StyledButton>
                            }
                        </>                        
                        :
                        <StyledButton 
                            width="100%" 
                            onClick={metamaskConnect}
                        >
                            Connect Wallet
                        </StyledButton>
                    }
                </LiquidityCard>           
            </CenterAlign>
        : 
        <CenterAlign>
            <Typography>Metamsk Is Not Installed</Typography>   
        </CenterAlign>
        }
        </>
    )
}


export default Pool;