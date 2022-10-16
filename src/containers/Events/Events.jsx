import React from 'react';

// Style
import './Events.css';

// Component navigation
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

// Component other

const Events = () => {
    return (
        <div className="Events">
            <Navigation />
            <h1 >Events</h1>
            <Footer />
        </div>
    )
}

export default Events;