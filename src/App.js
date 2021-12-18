import React from 'react';
import './FontAwesome/index.js'
//import logo from "./logo.svg"
import "./App.css";
import Retry from './Retry';
import Mint from './Mint'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Retry />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </Router>
  
  );
}

export default App;