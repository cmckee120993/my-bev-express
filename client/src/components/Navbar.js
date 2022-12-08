import React from 'react';
import '../styles/Navbar.css';

import bottle from '../assets/images/bx-beer-bottle.png';

function Navbar(props) {
    const tabs = ['Home', 'Search', 'Slushies', 'Contact']

    return (
        <navbar> 
            <div className="navbar">
                <img className="beer-bottle" src={bottle} alt="Beverage Express Beer Bottle"/>
            {tabs.map((tab) => (
                <button key={tab} className="nav-button">
                    <a href={'#' + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)} className="nav-link">
                        <h2 className="tab-name">{tab}</h2>
                    </a>
                </button>
            ))}
            </div>
        </navbar>
    );
};

export default Navbar;