import "./style.css";
import Auth from "../../utils/auth";

import bottle from "../../assets/images/bx-beer-bottle.png";

function Navbar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="extra-nav">
          <button className="nav-button">
            <a href="/customerpanel">
              <h2 className="tab-name">Customer Panel</h2>
            </a>
          </button>
          <button onClick={() => Auth.logout()} className="nav-button">
            <a href="/">
              <h2 className="tab-name">Logout</h2>
            </a>
          </button>
        </div>
      );
    } else {
      return (
        <div className="extra-nav">
          <button className="nav-button">
            <a href="/signup">
              <h2 className="tab-name">Signup</h2>
            </a>
          </button>
          <button className="nav-button">
            <a href="/login">
              <h2 className="tab-name">Login</h2>
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
      <div className="navbar">{showNavigation()}</div>
    </nav>
  );
}

export default Navbar;
