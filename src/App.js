import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Robot from './components/RobotFace'; // Adjust this path to where RobotCanvas is located
import Site from './components/site2';
// import Video from './components/HeroVideoDialogDemo';

import CursorDot from './components/CursorDot';
import Features from './components/Features'; // Import the new page
import ComingSoon from './components/ComingSoon';


function App() {
  return (
    <Router> {/* Wrap your app inside the Router */}
      <div className="App">
        <header className="App-header">
          {/* Navbar should be inside Router */}
          <Navbar /> {/* Navbar now contains links */}
          
          {/* Define the routes */}
          <Routes>
            <Route path="/" element={<Hero />} /> {/* Home page */}
            <Route path="/features" element={<Features />} /> {/* Features page */}
            <Route path="/comingsoon" element={<ComingSoon/>}/> {/* Coming Soon page */}
            {/* You can add more routes here for other pages */}
          </Routes>
          
          <Footer />
        </header>
      </div>
    </Router>
    
  );
}

export default App;
