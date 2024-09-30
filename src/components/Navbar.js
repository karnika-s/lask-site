import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Asset 3.png';  // Ensure you have the logo in the correct path
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-brand">
          <img src={logo} alt="LASK AI Logo" className="navbar-logo" />
          <Link to="/" className="navbar-brand-name">LASK.AI</Link>
                  </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/ComingSoon">Docs</Link></li>
          <li><Link to="/Features">Why LASK?</Link></li>
          <li><Link to="/ComingSoon">Supported IDEs</Link></li>
          </ul>
      </div>


      {/* <div className="button2-container">
        <div className="button2-background"></div>
        <a className="button2" title="signup">Sign up</a>
      </div> */}
            {/* Sign up Button Redirects to register.js */}
            <div className="button2-container">
        <div className="button2-background"></div>
        <Link to="/register" className="button2" title="signup">Sign up</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
