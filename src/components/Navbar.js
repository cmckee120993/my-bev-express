import React from 'react';

function Navbar(props) {
    const tabs = ['Home', 'Search', 'Slushies', 'Contact']

    return (
        <navbar>
           {tabs.map((tab) => (
            <button key={tab}>
                <a href={'#' + tab.toLowerCase()} onClick={() => props.handlePageChange(tab)}>
                    <h2>{tab}</h2>
                </a>
            </button>
           ))}
        </navbar>
    );
};

export default Navbar;