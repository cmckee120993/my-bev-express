import React from 'react';
import './style.css';
import Cart from '../Cart';

// import Store from '../assets/images/'


function Header() {

    return (
        <>
            <header className="header">
                <p className="tagline">We got a whole lotta beer!</p>
                {/* <img className="store-image" src={Store} alt="Beverage Express Storefront"/> */}
            </header>
            <Cart/>
        </>
    );
};

export default Header;