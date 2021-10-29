import React,{useState} from "react";
import styled from "styled-components";



const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <Nav>
            <Logo href="">
                Logo
            </Logo>
            <HamBurger onClick={ ()=>setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </HamBurger>
            <Menu open={open}>
                <MenuLinks href="">Home</MenuLinks>
                <MenuLinks href="">About</MenuLinks>
                <MenuLinks href="">Product</MenuLinks>
                <MenuLinks href="">Contact</MenuLinks>
            </Menu>
        </Nav>
    )
}

export default NavBar;


const Nav = styled.div`
    padding: 0px 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: white;
`;
const HamBurger = styled.div`
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

const Menu = styled.div`
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

const MenuLinks = styled.a`
    padding: 1em 1em;
    text-decoration: none;
    cursor: pointer;
    color: #7b7fda;
    transition: all 0.3s ease-in;
    &:hover {
        color: tomato;
    }`;


const Logo =styled.a`
    padding: 1em 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.2em;
`;