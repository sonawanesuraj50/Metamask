import Add from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import { CenterAlign, HelpIcon, LiquidityCard, StyledButton } from '../../Styles/Cards.styles';
import { Typography } from '../../Styles/Typography.styles';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import BUSDContract from '../../Contract/BscContract.json'



let web3: any;
declare let window: any;

function Swap(){
    const [provider,setProvider] = useState<any>();
    const [connect,setConnect] = useState<Boolean>(Boolean);  
    const [chainId,setChainId] = useState<String>(String);

    const BusdContractAddress ="0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";


    useEffect(() => {
        async function init(){
           const provider:any = await detectEthereumProvider();
           setProvider(provider); 
           setProvider(provider); 
           setProvider(provider); 
           setConnect(provider?.isConnected());
           web3 = new Web3(window.ethereum);
           const Contract = new web3.eth.Contract(BUSDContract,BusdContractAddress);
           const ContractName = await Contract.methods.balanceOf("0x62F2a8B0B45826dD410ABB3ac6476E1c4B6d25aa").call();
           console.log(Web3.utils.fromWei(ContractName,'ether'),'---------------contract')
           setChainId(provider?.chainId);
           provider.on('chainChanged', (chainId:any) => {
               setChainId(chainId)
             });
         }
         init();        
       },[provider,chainId]);

    const metamaskConnect = async () =>{  
        const ethereum:any = await detectEthereumProvider();
        web3 = new Web3(window.ethereum);
        let account = await ethereum.request({ method: 'eth_requestAccounts' });
        if(account != 'undefined')
        {
            setConnect(true)
        }
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
            // <CenterAlign>
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
                        pattern="^\d*(\.\d{0,2})?$"
                        // value={firstTokenValue} 
                        min="0.00"
                        step="0.001"
                        max="1.00"
                        onChange={(e)=>console.log(e.currentTarget.value)}
                    />  
                    <Add />          
                    <input 
                        type="text" 
                        placeholder="BUST"
                        disabled={chainId!=="0x61"} 
                        // value={secondTokenValue} 
                        // onChange={secondInput}
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
                                    // onClick={addLiquidity}
                                >
                                    Swap
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
            // </CenterAlign>
        : 
        <CenterAlign>
            <Typography>Metamsk Is Not Installed</Typography>   
        </CenterAlign>
        }
        </>
    )
}


export default Swap;