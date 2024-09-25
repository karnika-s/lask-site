import React from 'react';
import '../styles/Navbar.css';  // You can add custom styles in Navbar.css
// import logo from '../assets/lask-logo.jpg';  // Ensure you have the logo in the correct path
// import logo from '../assets/Asset 2.png';  // Ensure you have the logo in the correct path
import logo from '../assets/Asset 3.png';  // Ensure you have the logo in the correct path



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add the logo and name */}
        <div className="navbar-brand">
          <img src={logo} alt="LASK AI Logo" className="navbar-logo" />
          <span className="navbar-brand-name">LASK.AI</span>
        </div>
        <ul className="navbar-links">
        <li><a href="/Pricing">Pricing</a></li> {/* Links to pricing.js */}
          <li><a href="#docs">Docs</a></li>
          <li><a href="#why-lask">Why LASK?</a></li>
          <li><a href="#supported-ides">Supported IDEs</a></li>
        </ul>
      </div>
      {/* <div className="navbar-right">
        <button className="btn-signup">Sign Up</button>
      </div>
      */}

<div className="relative hidden md:inline-flex">
    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg"></div>
    <button
      className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
      title="Sign Up"
    >
      Sign Up
    </button>
  </div>
    </nav>
  );
};

export default Navbar;
