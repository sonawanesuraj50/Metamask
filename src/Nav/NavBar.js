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
import {
    BrowserRouter as Router,
    Routes,
    Route    
  } from "react-router-dom";



const NavBar = () => {
    const [open, setOpen] = useState(false);
    const counter = useSelector(state => state.counters)
    return (
        <Router>
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

            <Routes>
            <Route path="/about" element={<h4>This is About Page</h4>}>               
            </Route>
            <Route path="/contact" element={<h4>This is Contact Page</h4>}>               
            </Route>
            <Route path="/product" element={<h4>This is Product Page</h4>}>            
            </Route>
            <Route path="/" element={<h4>This is Home Page</h4>} />                
            </Routes>

        </Router>
    )
}

export default NavBar;


