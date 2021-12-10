import React, { useEffect, useState } from 'react';
import { Button } from '../Styles/Button.styles';
import { CenterAlign, LiquidityCard,Add, HelpIcon } from '../Styles/Cards.styles';
import { Typography } from '../Styles/Typography.styles';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

let web3: any;
declare let window: any;

function Pool(){
    const [provider,setProvider] = useState<any>();
    const [connect,setConnect] = useState<Boolean>(Boolean);    

    useEffect(() => {
       async function init(){
            const provider:any = await detectEthereumProvider();
            setProvider(provider); 
            setConnect(provider?.isConnected())
        }
        init();        
      },[provider])
      console.log(provider?.accounts)
      console.log(provider)

      const metamaskConnect = async () =>{  
        const ethereum:any = await detectEthereumProvider();
        web3 = new Web3(window.ethereum);
        let account = await ethereum.request({ method: 'eth_requestAccounts' });
        if(account != 'undefined')
        {
            setConnect(true)
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
                        <Typography>Input</Typography>
                        <Typography>Balance:</Typography>
                    </text>
                    <input type="text" placeholder="Token 0"/>  
                    <Add />          
                    <input type="text" placeholder="Token 1"/>
                    {connect ?
                        <Button width="100%">Ad Liquidity</Button>
                        :
                        <Button width="100%" onClick={metamaskConnect}>Connect Wallet</Button>
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