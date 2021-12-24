import styled,{css} from "styled-components";
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button } from '../Styles/Button.styles';


export const StyledCard = styled.article<any>`
    width:90vw;
    max-width: 30rem;
    background: white;
    border-radius: 0.25rem;
    img{
        width: 100%;
        border-top-left-radius: 0%.25rem;
        border-top-right-radius: 0%.25rem;
    }
    footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        h4{
            color: ${(props:any):any => !props.theme.textColor};
            text-transform: capitalize;        
        }
    }
    transition:all 0.5s ease-in-out; &:hover{
        box-shadow: 0 3px 3px ${props => props.theme.textColor};
        cursor: pointer;         
        transform: translate(0, -4px);
    }
`;


/********************************************************************/

// const gradient = degs => css`
//     background: 
//         linear-gradient(
//             ${degs || 130}deg,
//             #00dbde 0%,
//             #fc00ff 100%,
//         );
// `;

// export const Card = styled.div`
//     position: relative;
//     overflow: hidden;
//     width: 300px;
//     padding: 3rem 0 2rem;
//     border-radius: 0.5rem;
//     color: white;
//     ${gradient()};
//     box-shadow: 0px 24px 38px rgba(0,0,0,0.025),
//             0 9px 46px 8px rgba(0,0,0,0.025),
//             0 11px 15px -7px rgba(0,0,0,0.025);
// `;

// export const Content = styled.div`
//     position: absolute;
//     z-index: -3;
//     display: flex;       
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `; 


/******************************************************** */

export const Form = styled.form`
    width:90vw;
    max-width: 30rem;
    background: white;
    border: 1px solid #eee;
    padding: 16px;
    box-sizing: border-box;
    color: black;
    border-radius: 4px;
`;

export const Input = styled.input<any>`
    padding: 4px 8px;
    max-width: 30rem;
    border: 1px solid #ccc;
    border-radius:4px;
    font-size: 1em;
    font-family: 'Open sans';
    margin-bottom: 8px;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
`;


/************************************************* */
export const StyledCardComponent = styled.article<any>`
    width:90vw;
    max-width: 16rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    font-family: Roboto;
    header{
        display: flex;
        flex-direction: row;
        align-items: center;        
        padding: 0.7rem;
        img {      
            width: 2.5rem;
            margin: 0 11px 0 0; 
            border-radius: 50%;
        }
        div {
            display: flex;
            justify-content: center;
            flex-direction: column; 
            text{
                font-weight: bold;            
                line-height: 19px;           
                color: #000000;
            }
            small{              
                font-size: 12px;
                color: #828282;               
            }
        }
    }
    img{
        width: 100%; 
        max-width: 16rem;
    }
    footer{
        display: flex;
        flex-direction: column; 
        font-weight: bold;
        font-size: 24px;    
        color: #000000;
        padding: 0.7rem;
        title{
            display: block;
        }
        small{
            font-size: 14px;           
            color: #4F4F4F;
            margin: 5px 0 5px 0;
        }
        text{
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #333333;
        }
    }
    :hover{
        cursor: pointer;
    }
`;
/**************************Liquidity**************************** */


export const LiquidityCard = styled.article<any>`
    /* width:90vw;
    max-width: 30rem;
    background: rgb(50, 41, 37);
    border-radius: 0.5rem;    
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px; */
    header{
        text-align: center;
        font-weight: 500;
        color: rgb(255, 205, 132);
        text-transform: capitalize; 
        font-size: 1.3rem;
        position: relative;
    }
    text{
        display: flex;
        justify-content: space-between;
        margin: 0.5rem 0 0.5rem 0;
    }
    input{
        width: 100%;
        color: rgb(255, 205, 132);
        background: rgb(50, 41, 37);
        display: flex;
        align-items: center;
        justify-content: center;      
        :focus {
            outline: none;
        } 
    }
    footer{
        padding: 0 0.5rem;
        h4{
            color: ${(props:any):any => !props.theme.textColor};
            text-transform: capitalize;        
        }
        text{
      
        }
    }
    /* transition:all 0.5s ease-in-out; &:hover{
        box-shadow: 0 3px 3px rgb(255, 205, 132);
        cursor: pointer;         
        transform: translate(0, -1px);
    } */
`;

export const CenterAlign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 65px);
`;

export const Add = styled(AddIcon)`
    color: ${(props:any):any => props.theme.textColor}; 
    padding: 1.2rem 0;
    width: 100% !important;
`;

export const HelpIcon = styled(HelpOutlineIcon)`
    cursor: help;
    position: absolute;
    right: 0;
`;

export const StyledButton = styled(Button)`
    margin-top: 2rem;
`;
 
/*********************************************** */

export const CardComponent = styled.article<any>`
    width:90vw;
    max-width: 30rem;
    background: white;
    border-radius: 0.5rem;    
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0.5rem;
        font-weight: 600;
        color: ${(props:any):any => !props.theme.textColor};
        text-transform: capitalize; 
        background-color:lightgray;
        border-radius: 0.5rem 0.5rem 0  0;
    }
    img{
        width: 100%;
        border-top-left-radius: 0%.25rem;
        border-top-right-radius: 0%.25rem;
    }
    footer{
        padding: 0 0.5rem;
        h4{
            color: ${(props:any):any => !props.theme.textColor};
            text-transform: capitalize;        
        }
        text{
      
        }
    }
    transition:all 0.5s ease-in-out; &:hover{
        box-shadow: 0 3px 3px ${props => props.theme.textColor};
        cursor: pointer;         
        transform: translate(0, -4px);
    }
`;

export const Clear = styled(ClearIcon)`
    color: ${(props:any):any => !props.theme.textColor}
`;

