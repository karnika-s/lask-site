// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#docs">Docs</a>
        <a href="#resources">Resources</a>
        <a href="#usage">Usage</a>
        <a href="#contact">Contact</a>
      </div>
      <p>&copy; 2024 LASK AI Coding Assistant</p>
    </footer>
  );
};

export default Footer;
