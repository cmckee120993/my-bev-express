import React from 'react';
import '../styles/Slushies.css';

import redSlushy from '../assets/images/red-slushy.png';
import blueSlushy from '../assets/images/blue-slushy.png';
import yellowSlushy from '../assets/images/yellow-slushy.png';
import peachSlushy from '../assets/images/peach-slushy.png';
import pinkSlushy from '../assets/images/pink-slushy.png';
import purpleSlushy from '../assets/images/purple-slushy.png';
import orangeSlushy from '../assets/images/orange-slushy.png';
import teaSlushy from '../assets/images/tea-slushy.png';
import creamSlushy from '../assets/images/cream-slushy.png';

function Slushies() {
    return (
        <>
            <h2 className="slushy-title">Adult Slushies</h2>
            <div className="slushy-div">
                <img className="slushy-one" src={redSlushy} alt="Red Slushy"/>
                <p></p>
                <img className="slushy-two" src={blueSlushy} alt="Blue Slushy"/>
                <p></p>
                <img className="slushy-three" src={yellowSlushy} alt="Yellow Slushy"/>
                <p></p>
                <img className="slushy-four" src={peachSlushy} alt="Peach Slushy"/>
                <p></p>
                <img className="slushy-five" src={pinkSlushy} alt="Pink Slushy"/>
                <p></p>
                <img className="slushy-six" src={orangeSlushy} alt="Orange Slushy"/>
                <p></p>
                <img className="slushy-seven" src={purpleSlushy} alt="Purple Slushy"/>
                <p></p>
                <img className="slushy-eight" src={orangeSlushy} alt="Orange Slushy"/>
                <p></p>
                <img className="slushy-nine" src={teaSlushy} alt="Tea Slushy"/>
                <p></p>
                <img className="slushy-ten" src={creamSlushy} alt="Cream Slushy"/>
                <p></p>
                <img className="slushy-eleven" src={purpleSlushy} alt="Purple Slushy"/>
                <p></p>
                <img className="slushy-twelve" src={purpleSlushy} alt="Purple Slushy"/>
                <p></p>
            </div>
        </>
    );
};

export default Slushies;