import React from 'react';

// Style
import './About.css';

// Component navigation
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

// Component other

const About = () => {
    return (
        <div className="About">
            <Navigation />
            <h1 >About</h1>
            <Footer />
        </div>
    )
}

export default About;