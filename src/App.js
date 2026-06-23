import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/home/home';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery}>
              <Home searchQuery={searchQuery} />
            </Layout>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
