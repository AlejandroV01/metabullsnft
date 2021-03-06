import React from 'react';
import './FontAwesome/index.js'
//import logo from "./logo.svg"
import "./App.css";
import Retry from './Retry';
import MintRetry from './MintRetry'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './nav';
import Footer from './Footer';


function App() {
  return (
  
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Retry />} />
        <Route path="/mint" element={<MintRetry />} />
      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;