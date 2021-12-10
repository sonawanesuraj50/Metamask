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
import { useSelector } from 'react-redux';
import { ThemeContext } from "styled-components";

function Toggle(isActive:any) {
    return(
        <ToggleWrapper>
            <Notch isActive={isActive}/>
        </ToggleWrapper>
    )
}


function NavBar() {
    const [open, setOpen] = useState(false);
    const counter = useSelector((state:any) => state.counters);
    const {id,setTheme} = useContext(ThemeContext);
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
                    <Toggle isActive={id === "dark"} onToggle ={setTheme}/>
                    <h3 style={{color:"black"}}>{counter}</h3>
                </Menu>
            </Nav>
        </>
    )
}

export default NavBar;


