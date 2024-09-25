import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
// import { Canvas } from '@react-three/fiber'; // Import Canvas from @react-three/fiber
// import { OrbitControls, Stars } from '@react-three/drei'; // Import OrbitControls and Stars from @react-three/drei
// import Earth from './components/Earth'; // Import Earth component
// import Trending from './components/Trending';
import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Robot from './components/RobotFace'; // Adjust this path to where RobotCanvas is located
import Site from './components/site2';
// import Video from './components/HeroVideoDialogDemo';

import CursorDot from './components/CursorDot';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <CursorDot /> */}
        <Navbar/>
        {/* <Site/> */}
        <Hero/>
        {/* <Video/> */}
        <Footer/>
      </header>

    </div>
    
  );
}

export default App;
