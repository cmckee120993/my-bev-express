import React from "react";

// Slideshow
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../styles/Slushies.css";

// Slushies
import mxdRed from "../assets/images/mxd-red.png";
import jooseBlue from "../assets/images/joose-blue.png";
import mxdGreen from "../assets/images/mxd-green.png";
import danielsPeach from "../assets/images/daniels-peach.png";
import seagramsPink from "../assets/images/seagrams-pink.png";
import mxdOrange from "../assets/images/mxd-orange.png";
import neonPurple from "../assets/images/neon-burst-purple.png";
import mangoOrange from "../assets/images/mangorita-orange.png";
import mxdTea from "../assets/images/mxd-tea.png";
import rebelCream from "../assets/images/rebel-cream.png";
import joosePurple from "../assets/images/joose-purple.png";
import springgatePurple from "../assets/images/springgate.png";

// BX Logo
import sixPack from "../assets/images/bx-six-pack.png";

const Example = () => {
  const images = [
    mxdRed,
    jooseBlue,
    mxdGreen,
    danielsPeach,
    seagramsPink,
    mxdOrange,
    neonPurple,
    mangoOrange,
    mxdTea,
    rebelCream,
    joosePurple,
    springgatePurple
  ];

  return (
    <>
      <div className="slushy-title-div">
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
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[1]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[2]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[3]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[4]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[5]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[6]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[7]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[8]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[9]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[10]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
        <div className="each-slide-effect">
          <div
            className="slushy-image"
            style={{
              backgroundImage: `url(${images[11]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left",
            }}
          >
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Example;
