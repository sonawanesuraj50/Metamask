import React,{useState,useContext} from "react";
import { 
    Nav,
    HamBurger,
    Menu,
    MenuLinks,
    Logo, 
    ToggleWrapper,
    Notch
} from "../Styles/NavBar.styles";
import { useDispatch, useSelector } from 'react-redux';
import {toggleLight,toggleDark} from '../actions/index';


function NavBar() {
    const [open, setOpen] = useState(false);
    const counter = useSelector((state:any) => state.counters);
    const distpatch = useDispatch();
    const toggleTheme = useSelector((state:any) => state.themeToggle) 
    return (
        <>
            <Nav>
                <Logo href="">
                    Logo
                </Logo>
                <HamBurger onClick={()=>setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </HamBurger>
                <Menu open={open}>
                    <MenuLinks to="/">Home</MenuLinks>
                    <MenuLinks to="/component">Component</MenuLinks>
                    <MenuLinks to="/pool">Pool</MenuLinks>
                    <MenuLinks to="/contact">Contact</MenuLinks>
                    <ToggleWrapper >
                        <Notch isActive={toggleTheme} 
                            onClick={()=> 
                                toggleTheme ? distpatch(toggleLight()) : distpatch(toggleDark())}/>
                    </ToggleWrapper>
                    <h3 style={{color:"black"}}>{counter}</h3>
                </Menu>
            </Nav>
        </>
    )
}

export default NavBar;


