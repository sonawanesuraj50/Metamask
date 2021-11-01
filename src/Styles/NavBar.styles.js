import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.whiteColor ? 'rgb(40, 44, 52)' : 'white')};  
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    width: 100vw; 
    height: 100vh;
  }
`
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

export const Menu = styled.div`
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

export const MenuLinks = styled.a`
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

export const ToggleButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 40%;
    background-color: ${props => (props.whiteColor ? 'rgb(40, 44, 52)' : 'white')};  
`;