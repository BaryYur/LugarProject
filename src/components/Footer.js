import React from 'react';

import { Link } from 'react-router-dom';

import './Footer.css';
import logoFooter from '../images/footer-logo.png';
 
function Footer () {
    return (
        <footer>
            <div className="footer-content__container">
            <div>
                <Link to="/starting">
                    <img src={logoFooter} alt="footer-logo" />
                </Link>
                <p>2118 Thornridge Cir. Dubai, UAE 35624</p>
                <p>+33 415 65356 - 9</p>
                <p>contact@lugar.com</p>
            </div>
            <div>
                <p>Quick links</p>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p>Legal Links</p>
                <ul>
                    <li>
                        <Link to="/">Terms</Link>
                    </li>
                    <li>
                        <Link to="/">Conditions</Link>
                    </li>
                    <li>
                        <Link to="/">Policy</Link>
                    </li>
                </ul>
            </div>
            <div>
                <p>Social Media</p>
                <ul>
                    <li>
                        <Link to="/">Facebook</Link>
                    </li>
                    <li>
                        <Link to="/">Twitter</Link>
                    </li>
                    <li>
                        <Link to="/">YouTube</Link>
                    </li>
                    <li>
                        <Link to="/">LinkedIn</Link>
                    </li>
                </ul>
            </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright @ 2022 Lugar Inc.</p>
            </div>
        </footer>
    );
};

export default Footer;