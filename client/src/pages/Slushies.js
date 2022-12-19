import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Slushies.css";

import redSlushy from "../assets/images/red-slushy.png";
import blueSlushy from "../assets/images/blue-slushy.png";
import yellowSlushy from "../assets/images/yellow-slushy.png";
import peachSlushy from "../assets/images/peach-slushy.png";
import pinkSlushy from "../assets/images/pink-slushy.png";
import purpleSlushy from "../assets/images/purple-slushy.png";
import orangeSlushy from "../assets/images/orange-slushy.png";
import teaSlushy from "../assets/images/tea-slushy.png";
import creamSlushy from "../assets/images/cream-slushy.png";
import sixPack from "../assets/images/bx-six-pack.png";

const Example = () => {
  const images = [
    redSlushy,
    blueSlushy,
    yellowSlushy,
    peachSlushy,
    pinkSlushy,
    orangeSlushy,
    purpleSlushy,
    orangeSlushy,
    teaSlushy,
    creamSlushy,
    purpleSlushy,
    purpleSlushy,
  ];

  return (
    <>
      <div className='slushy-title-div'>
        <h2 className="slushy-title">Adult Slushies</h2>
        <img
          className="slushy-header-image"
          src={sixPack}
          alt="Beverage Express Six Pack Logo"
        />
      </div>

      <Slide className="slushy-slideshow">
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[0]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>1. Strawberry Daiquiri </li>
                <li> MXD Drinks Co.</li>
                <li>12% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[1]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
          
            <ul className='slushy-description'>
                <li>2. J-Series Blue Lemonade </li>
                <li> Joose</li>
                <li>14% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[2]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>3. Margarita</li>
                <li> MXD Drinks Co.</li>
                <li>12% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[3]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>4. Southern Peach Cocktail</li>
                <li>Jack Daniel's Beverage Co.</li>
                <li>4.8% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[4]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>5. Jamaican Me Happy</li>
                <li>Seagram's Escapes</li>
                <li>3.2% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[5]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
           
            <ul className='slushy-description'>
                <li>6. Mai Tai</li>
                <li>MXD Drinks Co. </li>
                <li>12% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[6]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
           
            <ul className='slushy-description'>
                <li>7. Grape Blowout</li>
                <li>Neon Burst</li>
                <li>8% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[7]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>8. Mang-O-Rita</li>
                <li>Bud Light Lime</li>
                <li>8% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[8]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>9. Long Island Iced Tea</li>
                <li>MXD Drink Co.</li>
                <li>12% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[9]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>10. Irish Cream Latte</li>
                <li>Rebel Hard Coffee</li>
                <li>5% ABV</li>
            </ul>
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[10]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
           
            <ul className='slushy-description'>
                <li>11. J-Series Blackberry</li>
                <li>Joose</li>
                <li>14% ABV</li>
            </ul> 
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="image"
            style={{
              backgroundImage: `url(${images[11]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
              height: "500px",
            }}
          >
            
            <ul className='slushy-description'>
                <li>12. Niagara Blush</li>
                <li>SpringGate Vineyard</li>
                <li>8% ABV</li>
            </ul>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Example;
