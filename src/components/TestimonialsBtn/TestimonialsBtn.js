import React from 'react'
import './testimonialsBtn.css'


const TesimonialsBtns = ({add,minus,nameClass}) => {
  
  return (
    <div className={`btns-works ${nameClass && 'btns-testimonial'}`}>
        <button className="btn-works" onClick={minus}>
            <svg width="49" height="30" viewBox="0 0 49 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse className='eclipse' cx="34" cy="15" rx="15" ry="15" transform="rotate(-180 34 15)" fill="#D72A2A"/>
            <path className='arrow-works' d="M0 15L10 20.7735L10 9.22649L0 15ZM40 14L9 14L9 16L40 16L40 14Z" fill="black"/>
        </svg>

        </button>
        <button className="btn-works" onClick={add}>
            <svg width="49" height="30" viewBox="0 0 49 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse className='eclipse' cx="15" cy="15" rx="15" ry="15" fill="#D72A2A"/>
            <path d="M49 15L39 9.2265L39 20.7735L49 15ZM9 16L40 16L40 14L9 14L9 16Z" fill="black"/>
            </svg>
        </button>
    </div>
  )
}

export default TesimonialsBtns