import React, { useEffect, useState } from 'react';
import { CenterAlign, LiquidityCard,Add, HelpIcon, StyledButton } from '../../Styles/Cards.styles';
import { Typography } from '../../Styles/Typography.styles';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import { withWeb3 } from 'web3-react'
import PoolAbi from '../../Contract/PoolAbi.json';
import { BigNumber } from "bignumber.js";


let web3: any;
declare let window: any;

function Pool(){
    const [provider,setProvider] = useState<any>();
    const [connect,setConnect] = useState<Boolean>(Boolean);  
    const [firstTokenValue, setFirstTokenValue] = useState<any>(Number);
    const [secondTokenValue, setSecondTokenValue] = useState<any>(Number);
    const [chainId,setChainId] = useState<String>(String);
    const PollContractAddress = "0xBEDa4Ea077766b43092397B0AE7D53bC999561eB";

    useEffect(() => {
       async function init(){
          const provider:any = await detectEthereumProvider();
          setProvider(provider); 
            setProvider(provider); 
          setProvider(provider); 
          setConnect(provider?.isConnected());
          web3 = new Web3(window.ethereum);
          var Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);
          var ContractName = await Contract.methods.factory().call();
          setChainId(provider?.chainId);
          provider.on('chainChanged', (chainId:any) => {
              setChainId(chainId)
            });
        }
        init();        
      },[provider,chainId]);
      console.log(provider?.isConnected(),'---isConnected')
      console.log(withWeb3,'withWeb3-----')

      const metamaskConnect = async () =>{  
        const ethereum:any = await detectEthereumProvider();
        web3 = new Web3(window.ethereum);
        let account = await ethereum.request({ method: 'eth_requestAccounts' });
        if(account != 'undefined')
        {
            setConnect(true)
        }
      }

      const firstInput = async (e:React.ChangeEvent<HTMLInputElement>) => {
        setFirstTokenValue(e.target.value) 
        web3 = new Web3(window.ethereum);
        var Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);
        const reserve0 = new BigNumber('66624601573058294884574');
        const reserve1 = new BigNumber('166276833826927710576895');

        if (e.currentTarget.value !== "") {
          const Input = web3.utils.toWei(e.currentTarget.value, "ether");
          const InputConvert = new BigNumber(Input);
          const secondValue = await Contract.methods.quote(
            InputConvert,
            reserve0.toFixed(),
            reserve1.toFixed()
         ).call(); 
          const getAmountConvert = (secondValue / Math.pow(10, 18)).toFixed(6);
          setSecondTokenValue(Number(getAmountConvert));
          }
      }

      const secondInput = async (e:React.ChangeEvent<HTMLInputElement>) => {
        setSecondTokenValue(e.target.value)
        web3 = new Web3(window.ethereum);
        const Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);
        const reserve0 = new BigNumber('166276833826927710576895');
        const reserve1 = new BigNumber('66624601573058294884574');

        if (e.currentTarget.value !== "") {
          const Input = web3.utils.toWei(e.currentTarget.value, "ether");
          const InputConvert = new BigNumber(Input);

        const firstValue = await Contract.methods.quote(
            InputConvert,
            reserve0.toFixed(),
            reserve1.toFixed()
         ).call();   
         const getAmountConvert = (firstValue / Math.pow(10, 18)).toFixed(6);
         setFirstTokenValue(Number(getAmountConvert));
        }
      }

      const addLiquidity = async () => {
        web3 = new Web3(window.ethereum);
        const Contract = new web3.eth.Contract(PoolAbi,PollContractAddress);  
        await Contract.methods.addLiquidity(
          '0x637f61c18cd7259f7c5ea50591c7befe6a2e0bfe',
          '0x6e03884333a30ee91afda92e429ff4fd95dc2850',
           firstTokenValue,
           secondTokenValue,
           1,
           2,
           '0x62F2a8B0B45826dD410ABB3ac6476E1c4B6d25aa',
           1639820846
         ).send({
            from: '0x62F2a8B0B45826dD410ABB3ac6476E1c4B6d25aa',
          }
         );    
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
                        step="any"
                        value={firstTokenValue} 
                        onChange={firstInput}
                    />  
                    <Add />          
                    <input 
                        type="text" 
                        placeholder="BUST"
                        disabled={chainId!=="0x61"} 
                        value={secondTokenValue} 
                        step="any"
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
            // </CenterAlign>
        : 
        <CenterAlign>
            <Typography>Metamsk Is Not Installed</Typography>   
        </CenterAlign>
        }
        </>
    )
}


export default Pool;