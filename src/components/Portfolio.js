import React from 'react'
import WorksNav from './WorksNav'
import WorkItem from './WorkItem'
import WorksBtns from './WorksBtns'
import TitleRotate from './TitleRotate'
import '../css/portfolio.css'


const Portfolio = () => {
  return (
    <section className="portfolio">
        <div className="section-center">  
        <TitleRotate title='projects'/>
            <div className="works-container">
                <h1 className="works-title">
                    My W<span className='works-letter'>o</span>rks
                </h1>
                <WorksNav/>
                
                     {/* <h1 className="portfolio-title">Portfolio</h1> */}
                    <div className="work-items">
                        <WorkItem/>
                        <WorkItem/>
                        <WorkItem/>
                        <WorkItem/>
                    </div>
                   
                
            <WorksBtns/>
            </div>
        </div>
    </section>
  )
}

export default Portfolio