import React from "react";
import Home from "./Home";
import NavBar from "./Nav/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route    
} from "react-router-dom";


function App() {
  return (
    <Router basename="/Metamask">
      <NavBar />
      <Routes>
            <Route path="/about" element={<h4>This is About Page</h4>}>               
            </Route>
            <Route path="/contact" element={<h4>This is Contact Page</h4>}>               
            </Route>
            <Route path="/product" element={<h4>This is Product Page</h4>}>            
            </Route>
            <Route path="/" element={<Home/>} />                
            </Routes>
    </Router>
  );
}

export default App;
