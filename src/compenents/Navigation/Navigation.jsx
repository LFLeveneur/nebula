import React from 'react';

// Style
import './Navigation.css';

// Image
import ImgLogo from '../../assets/img/logo.png';
import ImgInstagram from '../../assets/img/instagram.png';

const Navigation = () => {
    return (
        <nav>
            <div className="nav-logo">
                <img src={ImgLogo} alt="Nebula Logo" />
            </div>
            <ul className="nav-menu">
                <li>
                <a href="/">Boutique</a>
                </li>
                <li>
                <a href="/about">Événements</a>
                </li>
                <li>
                <a href="/contact">À propos</a>
                </li>
            </ul>
            <ul className="nav-instagram">
                <li><a href="https://www.instagram.com/nebulabde/">Instagram</a></li>
                <li><a href="https://www.instagram.com/nebulabde/">
                    <img src={ImgInstagram} alt="Instagram Logo" />
                </a></li>
            </ul>
        </nav>
    );
}

export default Navigation;