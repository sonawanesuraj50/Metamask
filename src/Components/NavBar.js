import React,{useState} from "react";
import { 
    Nav,
    HamBurger,
    Menu,
    MenuLinks,
    Logo, 
    // ToggleButton
} from "../Styles/NavBar.styles";
import { useSelector } from 'react-redux';
import {Toggle} from '../Styles/Toggle';


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const counter = useSelector(state => state.counters)
    return (
        <>
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
                    <MenuLinks to="/">Home</MenuLinks>
                    <MenuLinks to="/component">Component</MenuLinks>
                    <MenuLinks to="/product">Product</MenuLinks>
                    <MenuLinks to="/contact">Contact</MenuLinks>
                    <Toggle />
                    <h3 style={{color:"black"}}>{counter}</h3>
                </Menu>
            </Nav>
        </>
    )
}

export default NavBar;


