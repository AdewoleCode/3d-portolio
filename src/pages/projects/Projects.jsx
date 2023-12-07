import React from 'react'
import { projectsArray } from '../../helper/Projects'
import PortfolioCard from '../../components/portfolioCard/PortfolioCard'
import "./Projects.css"

const Projects = () => {

  return (
    <section id='project-section'>

      <h3 className='head'>Portfolio</h3>
    <div className='project-container'>
      {
        projectsArray.map((project, index) => (
          <PortfolioCard
            key={project.id}
            name={project.projectName}
            img={project.imgUrl}
            webUrl={project.webUrl}
            id={project.id}
          />
        ))
      }
    </div>
    </section>

  )
}

export default Projects