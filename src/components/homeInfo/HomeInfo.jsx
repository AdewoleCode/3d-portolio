import React from 'react'
import "./HomeInfo.css"
import { Link } from 'react-router-dom'

const ContentBox = ({ text, link, btnText }) => {
    return (
        <div className='content-box'>
            <p>{text}</p>
            <Link to={link}>
                <button>{btnText}</button>
            </Link>
        </div>
    )
}

const renderContent = {
    1: (
        <h1>
            Hi, I'm <span>Ade</span>, a creative fullstack web developer
        </h1>
    ),
    2: (
        <ContentBox
            text="Over 3 years of experience, working with various, modern technologies"
            link="/about"
            btnText="About Me"
        />
    ),
    3: (
        <ContentBox
            text="Some of the projects i've worked on"
            link="/projects"
            btnText="Visit My Portfolio"
        />
    ),
    4: (
        <ContentBox
            text="Need a project done or need a talented, creative developer to join your team?"
            link="/contact"
            btnText="Let's Talk"
        />
    )
}

const HomeInfo = ({ currentStage }) => {

    return (
        <div
            className={currentStage === 1 ? "home-info-container" : "home-info-container content-box"}
        >
            {
                renderContent[currentStage] || null
            }
        </div>
    )
}

export default HomeInfo