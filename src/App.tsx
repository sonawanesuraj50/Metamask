import React from "react";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route    
} from "react-router-dom";
import { createGlobalStyle, ThemeProvider} from "styled-components";
import Component from './Components/Components';
import DarkTheme from './Styles/DarkTheme';
// import { Theme } from "./Styles/NavBar.styles";
//import LightTheme from './Styles/LightTheme';


export const GlobalStyle = createGlobalStyle<any>`
  body {
    background-color: ${props => props.theme.backgroundColor};  
    color: ${props => (props.dark ? 'white' : 'black')};
    width: 100vw; 
    height: 100vh;
  }
  html{
    font-size: 16px;
    @media (max-width:786px) {
       font-size: 13px;
    }
  }`;

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Router basename="Metamask">
        <NavBar />
        <Routes>
              <Route path="/component" element={<Component />}>               
              </Route>
              <Route path="/contact" element={<h4>This is Contact Page</h4>}>               
              </Route>
              <Route path="/product" element={<h4>This is Product Page</h4>}>            
              </Route>
              <Route path="/" element={<Home/>} />                
              </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
