import React, { useState } from 'react';

import { NavLink, Link } from 'react-router-dom';

import './MainHeader.css';
import logo from '../images/logo.png';
import heroImg from '../images/hero-img.png';
import contact from '../images/contact-solid-24.png';
import home from '../images/home-solid-24.png';
import detail from '../images/detail-solid-24.png';
import project from '../images/landscape-regular-24.png';

function MainHeader() {
    const [activeMenu, setActiveMenu] = useState(false);

    const menuHandler = () => {
        setActiveMenu(active => !active);
        document.body.classList.toggle('modal-open');
    };

    const wrapperHandler = () => {
        setActiveMenu(false);
        document.body.classList.remove('modal-open');
    };
    
    return (
        <div className="main-header">
            <header>
                <Link className={activeMenu ? "fixed-logo" : "logo"} to="/starting">
                    <img src={logo} alt="logo" />
                </Link>
                <nav className={activeMenu ? "active-nav" : "not-active-nav"}>
                    <div onClick={wrapperHandler} className="nav-wrapper"></div>
                    <ul>
                        <li>
                            <NavLink to="/home">
                                <span className="nav-logo">
                                    <img src={home} alt="home" />
                                </span>
                                <span>HOME</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                <span className="nav-logo">
                                    <img src={detail} alt="detail" />
                                </span>
                                <span>ABOUT</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/project">
                                <span className="nav-logo">
                                    <img src={project} alt="project" />
                                </span>
                                <span>PROJECT</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <span className="nav-logo">
                                    <img src={contact} alt="contact" />
                                </span>
                                <span>CONTACT</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div onClick={menuHandler} className={activeMenu ? "active-menu-btn" : "menu-btn"}>
                    <span></span>
                </div>
            </header>
            <div className='hero-container'>
                <h1>A home is built with love and dreams</h1>
                <p>Real estate farm that makes your dreams true</p>
                <div>
                    <Link to="/project">Our projects</Link>
                    <Link to="/contact">Contact us</Link>
                </div>
                <img src={heroImg} alt="hero-img" />
            </div>
        </div>
    )
};

export default MainHeader;