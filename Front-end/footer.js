import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="blue-line"></div>
            <div className="footer_content">
                <div className="footer_text">
                    <h1>Connect With Us!</h1>
                    <h2>We'd love to get to know you better.</h2>
                </div>
                <div className="footer_icons">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="icon" />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon" />
                    </a>
                </div>
                <div className="footer_text">
                    <p>© 2023 Limitless Martial Arts. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;