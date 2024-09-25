// import React, { useState } from 'react';
// import '../styles/Navbar.css';
// import logo from '../assets/Asset 3.png';  // Ensure you have the logo in the correct path

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <div className="navbar-brand">
//           <img src={logo} alt="LASK AI Logo" className="navbar-logo" />
//           <span className="navbar-brand-name">LASK.AI</span>
//         </div>
//         <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
//           <li><a href="#docs">Docs</a></li>
//           <li><a href="#why-lask">Why LASK?</a></li>
//           <li><a href="#supported-ides">Supported IDEs</a></li>
//         </ul>
//       </div>

//       {/* <div className="button-container">
//         <div className="button-background"></div>
//         <a className="button" title="signup">Sign up</a>
//       </div> */}

//       <div className="hamburger" onClick={toggleMenu}>
//         <div className={`line ${isOpen ? 'open' : ''}`}></div>
//         <div className={`line ${isOpen ? 'open' : ''}`}></div>
//         <div className={`line ${isOpen ? 'open' : ''}`}></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/Asset 3.png';  // Ensure you have the logo in the correct path

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
          <span className="navbar-brand-name">LASK.AI</span>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#why-lask">Why LASK?</a></li>
          <li><a href="#supported-ides">Supported IDEs</a></li>
        </ul>
      </div>


      <div className="button2-container">
        <div className="button2-background"></div>
        <a className="button2" title="signup">Sign up</a>
      </div>

      {/* <div className="button-container download-button-container">
        <div className="button-background"></div>
        <a className="button" title="download-extension">Download Extension</a>
      </div> */}

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
