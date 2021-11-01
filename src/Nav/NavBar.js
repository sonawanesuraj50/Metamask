import React,{useState} from "react";
import { 
    Nav,
    HamBurger,
    Menu,
    MenuLinks,
    Logo, 
    ToggleButton
} from "../Styles/NavBar.styles";



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
                <ToggleButton />
            </Menu>
        </Nav>
    )
}

export default NavBar;


