import React from 'react'
// import { TbArrowBackUp } from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom';
import { projectsArray } from '../../helper/Projects';
import "./projectDetails.css"

const projectDetails = () => {
    const { id } = useParams();
    const projectList = projectsArray[id] 

    // console.log(projectList);

    return (
        <section id='description-section'>
            <div className="description-container">
                <div className="proj-image-box">
                    <div className="portfolio-image">
                        <img src={projectList.imgUrl} alt="" />
                    </div>
                    <div className="description-cta">
                        <a href={projectList.gitHub} className='btn' target="_blank">Github</a>
                        <a href={projectList.webUrl} className='btn-primary' target="_blank">Live URL</a>
                    </div>
                </div>
                <div className="proj-stacks">
                    <h2>{projectList.projectName}</h2>
                    <p>{projectList.desc}</p>
                    <div className="stacks">
                        <h3>Technologies Used</h3>
                        <ol>
                            <li><span>01.</span> {projectList.stacks[0]}</li>
                            <li><span>02.</span>{projectList.stacks[1]}</li>
                            <li><span>03.</span>{projectList.stacks[2]}</li>
                            {projectList.stacks[3] ? (<li><span>03.</span>{projectList.stacks[3]}</li>) : null}
                            {projectList.stacks[4] ? (<li><span>04.</span>{projectList.stacks[4]}</li>) : null}
                            {projectList.stacks[5] ? (<li><span>05.</span>{projectList.stacks[5]}</li>) : null}
                            {projectList.stacks[6] ? (<li><span>06.</span>{projectList.stacks[6]}</li>) : null}
                            {projectList.stacks[7] ? (<li><span>07.</span>{projectList.stacks[7]}</li>) : null}
                            {projectList.stacks[8] ? (<li><span>08.</span>{projectList.stacks[8]}</li>) : null}
                            {projectList.stacks[9] ? (<li><span>09.</span>{projectList.stacks[9]}</li>) : null}
                            {projectList.stacks[10] ? (<li><span>10.</span>{projectList.stacks[10]}</li>) : null}
                        </ol>
                    </div>
                </div>
            </div>
            <Link to="/projects" className='btn des-btn'>BACK</Link>
        </section>
    )
}

export default projectDetails