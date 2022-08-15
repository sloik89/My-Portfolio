import React from 'react'
import ExpirienceItem from './ExpirienceItem'
import TitleRotate from './TitleRotate'
import '../css/expirience.css'
import html from '../assets/html5.svg'
const Expirience = () => {
  return (
    <section className="expirience">
        <div className="section-center">
             <TitleRotate title ='skills'/>
            <div className="expirience-container">
                <h3 className="expirience-title">
                    Expirience
                </h3>
                <p className="expirience-desc">
                    These are technology I've worked with
                </p>
                <div className="expirience-wrapper">
                    <ExpirienceItem text="HTML 5" icon={html}/>
                     <ExpirienceItem text ="CSS 3"/>
                     <ExpirienceItem/>
                     <ExpirienceItem/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Expirience