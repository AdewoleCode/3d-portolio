import React from 'react'
import man from "../../assets/images/man.png"
import "./About.css"
import { Link } from "react-router-dom"
import css from "../../assets/icons/css.svg"
import git from "../../assets/icons/git.svg"
import github from "../../assets/icons/github.svg"
import nextJs from "../../assets/icons/nextjs.svg"
import tailwind from "../../assets/icons/tailwindcss.svg"
import mui from "../../assets/icons/mui.svg"
import mongodb from "../../assets/icons/mongodb.svg"
import express from "../../assets/icons/express.svg"
import html from "../../assets/icons/html.svg"
import saas from "../../assets/icons/sass.svg"
import typescript from "../../assets/icons/typescript.svg"
import nodejs from "../../assets/icons/nodejs.svg"
import javascript from "../../assets/icons/javascript.svg"
import redux from "../../assets/icons/redux.svg"
import react from "../../assets/icons/react.svg"
import { Fade } from 'react-reveal'




const About = () => {
  return (
    <div className='about-container'>
      <h3 className='heading-about'>About Me</h3>

      <div className="top">

        <Fade left duration={2000}>
          <div className="left">
            <img src={man} alt="man" />
          </div>
        </Fade>
        <Fade right duration={2000}>
          <div className="right">
            {/* <h3>ABOUT ME!</h3> */}
            <p className='text-first'>
              I’m an experienced software developer with over 3 year of professional programming experience.
            </p>
            <p className='text-second'>
              I am a passionate self-learner with a great eye for nice,
              modern UI designs. I enjoy building projects using various technologies that helps with scalabilty
            </p>
            <p className='text-third'>
              As a developer, I enjoy bridging the gap between functionality and design. My goal is to always build web applications that are efficient while providing quality user experiences.
              Also, I am highly responsive to client needs and committed to helping people realize their vision.
            </p>
          </div>
        </Fade>
      </div>
      <div className="bottom">
        <h3 className='heading-skills'>My Skills</h3>
        <Fade bottom duration={3000}>
          <div className="skills-container">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={typescript} alt="typescript" />
            <img src={nextJs} alt="nextjs" />
            <img src={tailwind} alt="tailwind" />
            <img src={nodejs} alt="nodejs" />
            <img src={mui} alt="mui" />
            <img src={express} alt="express" />
            <img src={mongodb} alt="mongodb" />
            <img src={saas} alt="saas" />
            <img src={redux} alt="redux" />
            <img src={git} alt="git" />
            <img src={github} alt="github" />
            <img src={react} alt="react" />
          </div>
        </Fade>
      </div>
      <div className="btn-box">
        <Fade left duration={2000}>
          <h4>Have a project in mind? Reach Out. <br /> let's build something together.</h4>
        </Fade>
        <Fade right duration={2000}>
          <Link to="/contact">
            <button>Contact me</button>
          </Link>
        </Fade>
      </div>
    </div>
  )
}

export default About