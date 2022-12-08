import React from 'react';
import '../styles/Footer.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faUntappd} from "@fortawesome/free-brands-svg-icons";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import beerLogo from '../assets/images/bev-exp-logo.png';
import clayLogo from '../assets/images/clay-logo.png';

function Footer() {
    return (
        <footer>
            <div className="footer-logo"><img src={beerLogo} alt="Beverage Express Logo"/></div>
            <div className="site-map">
            </div>
            <div className="social-links">
                <a href="https://www.facebook.com/wholelottabeer/"> 
                    <FontAwesomeIcon className="footer-icon" icon={faFacebook}/>
                </a>
                <a href="https://www.instagram.com/bevexpresscarlislepa/"> 
                    <FontAwesomeIcon  className="footer-icon" icon={faInstagram} />
                </a>
                <a href="https://untappd.com/v/beverage-express/866137">
                    <FontAwesomeIcon  className="footer-icon" icon={faUntappd} />
                </a>
                <a href = "mailto: bevexpress1021@gmail.com">
                    <FontAwesomeIcon className="footer-icon" icon={faPaperPlane}/>
                </a>
            </div>
            <div className="creator"><img src={clayLogo} alt="Clay's Creative Solutions Logo"/><p className="copyright">© Clay's Creative Solutions 2022</p></div>
        </footer>
    );
};

export default Footer;