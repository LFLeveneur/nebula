import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './Navigation.css';

// Image
import ImgLogo from '../../assets/img/logo.png';
import IconInstagram from "../../assets/icon/IconInstagram";
import IconNavLinkActive from "../../assets/icon/IconNavLinkActive";
import IconHome from "../../assets/icon/IconHome";
import IconAbout from "../../assets/icon/IconAbout";
import IconEvent from "../../assets/icon/IconEvent";
import IconProducts from "../../assets/icon/IconProducts";

const Navigation = () => {
    return (
        <>
            <nav className="nav-desktop">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={ImgLogo} alt="Nebula Logo" />
                    </Link>
                </div>
                <ul className="nav-menu">
                    <li>
                    <Link to="/products">Boutique</Link>
                    </li>
                    <li>
                    <Link to="/event">Événements</Link>
                    </li>
                    <li>
                    <Link to="/about">À propos</Link>
                    </li>
                </ul>
                <a className="nav-instagram" href="https://www.instagram.com/nebulabde/">
                    Instagram
                    <IconInstagram color="#fff" scale="2"/>
                </a>
            </nav>

            <nav className="nav-mobile">
                <ul className="nav-menu">
                    <li>
                        <Link to="/events">
                            <IconEvent />
                            <IconNavLinkActive className={window.location.pathname === "/events" ? "nav-link-active" : "nav-link"}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <IconProducts />
                            <IconNavLinkActive className={window.location.pathname === "/products" ? "nav-link-active" : "nav-link"}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <IconHome />
                            <IconNavLinkActive className={window.location.pathname === "/" ? "nav-link-active" : "nav-link"}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <IconAbout />
                            <IconNavLinkActive className={window.location.pathname === "/about" ? "nav-link-active" : "nav-link"}/>
                        </Link>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/nebulabde/" target="_blank">
                            <IconInstagram />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;