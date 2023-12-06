import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import linkedIn from "../../assets/icons/linkedin.svg"
import twitter from "../../assets/icons/twitter.svg"
import github from "../../assets/icons/github.svg"
import git from "../../assets/icons/git.svg"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="left">
                <p>Adewole. All rights reserved.</p>
            </div>
            <div className="right">
                <Link>
                    <img src={twitter} alt="twitter" />
                </Link>
                <Link>
                    <img src={linkedIn} alt="linkedin" />
                </Link>
                <Link>
                    <img src={github} alt="github" />
                </Link>
            </div>
        </div>
    )
}

export default Footer