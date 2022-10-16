import React from 'react';

// Style
import './Home.css';

// Component navigation
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

// Component other
import Hero from '../../components/Hero/Hero';
import NextEvent from '../../components/NextEvent/NextEvent';

const Home = () => {



    return (
        <div className="home">
            <Navigation />

            <Hero />
            <NextEvent />

            <Footer />
        </div>
    )
}

export default Home;