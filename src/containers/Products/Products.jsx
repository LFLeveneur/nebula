import React from 'react';

// Style
import './Products.css';

// Component navigation
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

// Component other

const Products = () => {
    return (
        <div className="Products">
            <Navigation />
            <h1 >Products</h1>
            <Footer />
        </div>
    )
}

export default Products;