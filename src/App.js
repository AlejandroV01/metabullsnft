import React from 'react';
import './FontAwesome/index.js'
//import logo from "./logo.svg"
import "./App.css";
import Retry from './Retry.js';
import Mint from './Mint.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
    <Router>
      <Routes>
        <Route  exact path="/" exact element={<Retry />} />
        <Route  exact path="/mint" exact element={<Mint />} />
      </Routes>
    </Router>
  
  );
}

export default App;