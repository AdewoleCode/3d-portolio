import React from 'react'
import { Link } from "react-router-dom";
import "./NavigationBar.css"

const NavigationBar = () => {

    return (
        <div className="nav_container" >
            <header>
                <Link to="/">
                    <h2 className='logo-title'>AA</h2>
                </Link>

                <nav>
                    <Link className="anchor" to="/about">About</Link>
                    <Link className="anchor" to="/projects">Projects</Link>
                    <Link className="anchor" to="/contact">Contact</Link>
                </nav>
            </header>
        </div>
    )
}

export default NavigationBar