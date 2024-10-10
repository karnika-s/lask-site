import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

import CursorDot from './components/CursorDot';
import Features from './components/Features'; // Import the new page
import ComingSoon from './components/ComingSoon';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Success from './components/Success';


function App() {
  return (
    <Router> {/* Wrap your app inside the Router */}
      <div className="App">
        <header className="App-header">
          {/* Navbar should be inside Router */}
          <Navbar /> {/* Navbar now contains links */}
          
          {/* Define the routes */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            {/* <Route path="/" element={<Short/>} /> Home page */}
            <Route path="/features" element={<Features />} /> 
            {/* Features page */}
            <Route path="/comingsoon" element={<ComingSoon/>}/> 
            {/* Coming Soon page */}
            <Route path="/register" element={<Register/>}/> 
            {/* You can add more routes here for other pages */}
            <Route path="/login" element={<Login/>}/> 

            <Route path="/success" element={<Success />} /> {/* Success page */}

          </Routes>
          
          <Footer />
        </header>
      </div>
    </Router>
    
  );
}

export default App;
