import React,{useState,useEffect} from 'react'
import '../css/testimonials.css'
import data from '../assets/sliderData'
import {RiDoubleQuotesR} from "react-icons/ri";
import TitleRotate from './TitleRotate'
import WorksBtns from './WorksBtns';
const Testimonials = () => {
    const [people,setPeople] = useState(data)
    const [index,setIndex] = useState(0)
    console.log(people);
    const clickHandleAdd = () => {
        setIndex(index +1)
    }
    const clickHandleMinus = () => {
        setIndex(index - 1)
    }
    useEffect(() => {
        const lastIndex = people.length - 1
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    },[index,people])
  return (
    <section className="tesimonials">
        <div className="section-center">
            <TitleRotate title='reviews'/>
            <div className="testimonials-wrapper">
                {
                    people.map((person,personIndex) => {
                        const {id,image,name,title,quote} = person
                        let position = 'nextSlide'
                        if(personIndex === index){
                            position = 'activeSlide'

                        }
                        if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
                            position = 'lastSlide'
                        }
                        return (
                            <article key={personIndex} className={position}>
                                <RiDoubleQuotesR className='test-icon'/>
                                <h4>{name}</h4>
                                <p className="title">
                                    {title}
                                </p>
                                <p className="quote">
                                    {quote}
                                </p>
                                <img src={image} alt={name} className='person-img' />
                            </article>
                        )
                    })
                }
                 
            </div>
            <WorksBtns add = {clickHandleAdd} minus = {clickHandleMinus} class
            nameClass = {true}
            />
            
        </div>
       
    </section>
  )
}

export default Testimonials