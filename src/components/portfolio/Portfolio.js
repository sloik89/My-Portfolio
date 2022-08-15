import React from 'react'
import './portfolio.css'
import Header from '../HeaderOpacity/Header'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import PortfolioNav from '../PortfolioNav/PortfolioNav'
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
        <div className="section-center portfolio-center">
            <Header header={'portfolio'}/>
            <div className="portfolio-wrapper">
                <h3 className="portfolio-title header-main">
                    My w<span className='header-accent'>o</span>rks
                </h3>
                <PortfolioNav/>
                <div className="portfolio-grid-container">
                    <PortfolioItem/>
                    <PortfolioItem/>
                     <PortfolioItem/>
                     <PortfolioItem/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio