import React from 'react'
import "./PortfolioCard.css"
import { Link } from 'react-router-dom'
import { Flip } from 'react-reveal'

const PortfolioCard = ({ name, img, webUrl, id }) => {
    return (
        <Flip left duration={3000}>

            <div className='portfolio-container'>
                <article>
                    <div className="card-image">
                        <img src={img} alt="portfolio" />
                    </div>
                    <h3>{name}</h3>
                    <div className="card-btn-box">
                        <Link to={webUrl}>
                            <button className='live-btn'>Live Url</button>
                        </Link>
                        <Link to={'/projects/' + id}>
                            <button className='more-btn'>More Info</button>
                        </Link>
                    </div>
                </article>
            </div >
        </Flip>
    )
}

export default PortfolioCard