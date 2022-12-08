import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';

// import Store from '../assets/images/'


function Header() {

    return (
        <>
         <button className="login-button">
                    <a href="/login">
                        <h2 className="tab-name">Login</h2>
                        <Link to="/login">Login</Link>
                    </a>
                </button>
            <header className="header">
                <p className="tagline">We got a whole lotta beer!</p>
                {/* <img className="store-image" src={Store} alt="Beverage Express Storefront"/> */}
            </header>
        </>
    );
};

export default Header;