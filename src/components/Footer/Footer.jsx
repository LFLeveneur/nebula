import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Link to="/contact" className="footer-link">Contact</Link>
        </footer>
    )
}

export default Footer;