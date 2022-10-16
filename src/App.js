import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles
import './styles/reset.css';
import './styles/global.css';
import './styles/fonts.css';

// Container
import Events from './containers/Events/Events';
import Products from './containers/Products/Products';
import Home from './containers/Home/Home';
import About from './containers/About/About';


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
