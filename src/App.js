import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/home/home';
import request from './request'


function App() {
  const [selectedOption, setSelectedOption] = useState(request.posts)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home selectedOption={selectedOption} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
