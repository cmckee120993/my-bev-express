import React from 'react';
import sixPack from "../assets/images/bx-six-pack.png";

function Background() {
    return (
        <div style={{
            backgroundImage:`url(${sixPack})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: '750px',
            backgroundPosition: 'center center' 
        }}>
            <h2>Adult Slushies</h2>
        </div>
    );
};

export default Background;