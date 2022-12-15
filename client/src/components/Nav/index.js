import "./style.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import bottle from "../../assets/images/bx-beer-bottle.png";

function Navbar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <button>
            <a href="/orderHistory">
              <h2>Order History</h2>
            </a>
          </button>
          <button onClick={() => Auth.logout()}>
            <a href="/">
              <h2>Logout</h2>
            </a>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button>
            <a href="/signup">
              <h2>Signup</h2>
            </a>
          </button>
          <button>
            <a href="/login">
              <h2>Login</h2>
            </a>
          </button>
        </div>
      );
    }
  }
  return (
    <nav>
      <div className="navbar">
        <img
          className="beer-bottle"
          src={bottle}
          alt="Beverage Express Beer Bottle"
        />
        <button className="nav-button">
          <a href="/">
            <h2 className="tab-name">Home</h2>
          </a>
        </button>
        <button className="nav-button">
          <a href="/search">
            <h2 className="tab-name">Search</h2>
          </a>
        </button>
        <button className="nav-button">
          <a href="/slushies">
            <h2 className="tab-name">Slushies</h2>
          </a>
        </button>
        <button className="nav-button">
          <a href="/contact">
            <h2 className="tab-name">Contact</h2>
          </a>
        </button>
      </div>
      <div>{showNavigation()}</div>
    </nav>
  );
}

export default Navbar;
