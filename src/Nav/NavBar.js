import React,{useState} from "react";
import { 
    Nav,
    HamBurger,
    Menu,
    MenuLinks,
    Logo, 
    ToggleButton
} from "../Styles/NavBar.styles";
import { useSelector } from 'react-redux';


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
                    <MenuLinks to="/about">About</MenuLinks>
                    <MenuLinks to="/product">Product</MenuLinks>
                    <MenuLinks to="/contact">Contact</MenuLinks>
                    <ToggleButton />
                    <h3 style={{color:"black"}}>{counter}</h3>
                </Menu>
            </Nav>
        </>
    )
}

export default NavBar;


