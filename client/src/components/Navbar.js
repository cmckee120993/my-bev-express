import '../styles/Navbar.css';
import {Link} from 'react-router-dom';

import bottle from '../assets/images/bx-beer-bottle.png';

function Navbar() {

    return (
        <nav> 
            <div className="navbar">
                <img className="beer-bottle" src={bottle} alt="Beverage Express Beer Bottle"/>
                <button className="nav-button">
                    <a href="/">
                        <h2 className="tab-name">Home</h2>
                        <Link to="/">Home</Link>
                    </a>
                </button>
                <button className="nav-button">
                    <a href="/search">
                        <h2 className="tab-name">Search</h2>
                        <Link to="/search">Search</Link>
                    </a>
                </button><button className="nav-button">
                    <a href="/slushies">
                        <h2 className="tab-name">Slushies</h2>
                        <Link to="/slushies">Slushies</Link>
                    </a>
                </button><button className="nav-button">
                    <a href="/contact">
                        <h2 className="tab-name">Contact</h2>
                        <Link to="/contact">Contact</Link>
                    </a>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;