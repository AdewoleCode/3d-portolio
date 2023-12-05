import React from 'react'
import { Link } from "react-router-dom";
// import { FaTimes } from "react-icons/fa"
// import { FaBars } from "react-icons/fa"
import "./NavigationBar.css"
import { useRef } from 'react';


const NavigationBar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div className="nav_container">

            <header>
                <Link to="/">
                   <h2>Adewole</h2>
                </Link>

                <nav ref={navRef}>
                    <Link className="anchor" to="/about">About</Link>
                    <Link className="anchor" to="/projects">Projects</Link>
                    <Link className="anchor" to="/contact">Contact</Link>

                    {/* mobile close btn */}
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}
                    >
                        {/* <FaTimes /> */}
                        close
                    </button>
                    {/* mobile close btn */}
                </nav>

                <button className="nav-btn"
                    onClick={showNavbar}
                >
                    open
                    {/* <FaBars /> */}
                </button>

            </header>

        </div>
    )
}

export default NavigationBar