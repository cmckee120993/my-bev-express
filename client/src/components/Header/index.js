import React from "react";
import "./style.css";
import Cart from "../Cart";

import Store from "../../assets/images/beverage-express-front.png";

function Header() {
  return (
    <>
      <Cart />
      <header className="header">
        <div className="tagline-div">
          <p className="tagline">We got a whole lotta beer!</p>
        </div>
        <div className="store-image-div">
          <img
            className="store-image"
            src={Store}
            alt="Beverage Express Storefront"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
