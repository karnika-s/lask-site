import React from 'react';
import "../styles/Footer.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
    return (
        <div className="footer-container">
            {/* Existing navigation sections */}
            <nav className="footer-nav" aria-labelledby="footer-title-product">
                <h3 className="footer-title" id="footer-title-product">Product</h3>
                <ul className="footer-list">
                    <li>
                        <a className="Link--secondary" href="/features/copilot">Copilot</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/marketplace">Marketplace</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/pricing">Pricing</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/about">About</a>
                    </li>
                </ul>
            </nav>

            <nav className="footer-nav" aria-labelledby="footer-title-resources">
                <h3 className="footer-title" id="footer-title-resources">Resources</h3>
                <ul className="footer-list">
                    <li>
                        <a className="Link--secondary" href="/support">Support</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/learning">Learning Lab</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="https://github.blog/">Blog</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/changelog">Changelog</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/security">Security</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="https://www.githubstatus.com/">Status</a>
                    </li>
                </ul>
            </nav>

            <nav className="footer-nav" aria-labelledby="footer-title-company">
                <h3 className="footer-title" id="footer-title-company">Company</h3>
                <ul className="footer-list">
                    <li>
                        <a className="Link--secondary" href="/careers">Careers</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/press">Press</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/partners">Partners</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/privacy">Privacy</a>
                    </li>
                    <li>
                        <a className="Link--secondary" href="/terms">Terms</a>
                    </li>
                </ul>
            </nav>

            {/* New Social Media Section */}
            <nav className="footer-nav social-media-nav">
                <h3 className="footer-title" id="footer-title-social">Follow Us</h3>
                <div class="social-bubble">
                <div className="social-media">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Footer;
