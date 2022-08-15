import React from 'react'
import Header from '../HeaderOpacity/Header'
import skillIcons from '../../assets/skillsIcons/skillsIcons'
import SkillsItem from '../SkillsItem/SkillsItem'
import './skills.css'

const Skills = () => {
    
  return (
    
    <section className="skills" id='skills'>
        <div className="section-center skills-center">
            <Header header='My weopens'/>
            <div className="skills-container">
                <h2 className="header-main">
                    My expirience
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus vitae sint, quibusdam suscipit porro quidem. Repudiandae perferendis minus accusamus!</p>
                <div className="skills-wrapper-grid">
                    {skillIcons.map((elem) => {
                        
                        return (
                           <SkillsItem {...elem}/>
                        )
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills