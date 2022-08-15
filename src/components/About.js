import React,{useRef,useEffect} from 'react'
import '../css/about.css'
import Icons from './Icons'
import arrow from '../assets/arrow.svg'
import image from '../assets/hero-small.jpg'
const About = () => {
const refButtons = useRef(null)
  return (
    <section className="about">
        <div className="section-center">
            <div className="about-hero">
                <div className="about-img-container">
                    <img src={image} className="about-image" alt="" />
                </div>
            </div>
            
            <div className="about-info">
               <div className="about-text-info">
                        info
                    </div>
                <div className="about-text">
                    
                    <h1 className="about-header">
                        A few words About <span>Me</span> 
                    </h1>
                    <p className="about-introduce">
                        My name is Sebastian Pirog. I live in Poland in the city of Rzeszów
                    I can create for you an interesting project based on modern technology 
                    </p>
                     <button className="about-btn btn">
            <p className="btn-text">Get CV</p>
            <img src={arrow} alt="" className='arrow' />
           
          </button>
           <Icons/>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About