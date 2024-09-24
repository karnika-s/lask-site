import React from 'react';
import '../styles/Navbar.css';  // You can add custom styles in Navbar.css
import logo from '../assets/lask-logo.jpg';  // Ensure you have the logo in the correct path


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
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#why-lask">Why LASK?</a></li>
          <li><a href="#supported-ides">Supported IDEs</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
