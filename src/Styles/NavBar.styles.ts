import styled from "styled-components";
import { 
    Link
  } from "react-router-dom";

export const FlexContainer = styled.div`
    width: 100%;
    height: calc(100vh - 65px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AppHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Nav = styled.div`
    padding: 0px 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
    border-bottom: 0.5px solid gray;
`;
export const HamBurger = styled.div`
    display: none;
    flex-direction: column;  
    border-radius: 5px;
    margin-left:auto  ;
    span {
        height: 2px;
        width: 25px;
        background-color: black;
        margin-bottom: 4px;
    }
    @media (max-width:786px) {
        display: flex;
    }
`;

export const Menu = styled.div<any>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width:786px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({open})=>(open? "300px" : "0px")};
        transition: max-height 0.3s ease-in;
    }
`;

export const MenuLinks = styled(Link)`
    padding: 1em 1em;
    text-decoration: none;
    cursor: pointer;
    color: #7b7fda;
    transition: all 0.3s ease-in;
    &:hover {
        color: tomato;
    }`;


export const Logo =styled.a`
    padding: 1em 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.2em;
`;

export const ToggleButton = styled.button<any>`
    width: 25px;
    height: 25px;
    border-radius: 40%;
    background-color: ${props => (props.whiteColor ? 'rgb(40, 44, 52)' : 'white')};  
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 0px;
`;


export interface Theme {
    id?: string;
    backgroundColor?: string;
    secondary?: string;
    primary?: string;
    text?: string;
    error?: string;
    textColor?: string;
    fontFamily?: string;
  }

  export const ToggleWrapper = styled.div<any>`
    width: 50px;
    min-width: 50px;
    height: 22px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    display: flex;
    background-image: linear-gradient(to bottom, ${(props:any):any => props.theme.primary} , ${(props:any):any => props.theme.secondary});
`;

export const Notch = styled.div<any>`
    height: 21px;
    width: 21px;
    border: 1px; 
    background: white;
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${p => p.isActive ? '26px' : '1px'});
`;

