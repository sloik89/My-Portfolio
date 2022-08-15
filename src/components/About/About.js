import React from 'react'
import './about.css'
import heroImg from '../../assets/hero-small.jpg'
import Header from '../HeaderOpacity/Header'
import BtnRound from '../btnRound/BtnRound'
const About = () => {
  return (
    <section className="about" id="about">
        <div className="section-center about-center">
               <Header header='info'/>
            <div className="content-wrapper">
            <article className="article-img-contaianer about-img-container">
                <img src={heroImg} alt="" className='hero-img'/>
            </article>
             <article className="about-info">
                <div className="about-text">
                    <h3 className="about-header header-main">
                        A few words About <span>Me</span> 
                    </h3>
                    <p className="about-introduce text-description">
                        My name is Sebastian Pirog. I live in Poland in the city of Rzeszów
                    I can create for you an interesting project based on modern technology 
                    </p>
                </div>
                <BtnRound title='download cv'/>
            </article>
             </div>
        </div>
    </section>
  )
}

export default About