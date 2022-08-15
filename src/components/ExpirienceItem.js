import React from 'react'
import katana from '../assets/katana.svg'

import '../css/ExpirienceItem.css'
const ExpirienceItem = ({text,icon}) => {
  return (
    <div className='expirience-item'>
      <div className="katana">
        <img src={katana} alt="" className='katana-img'/>
        
      </div>
      <div className="border-expirience">
      </div>
      <div className="expirience-circle-desc">
        <p>{text}</p>
        <img src={icon} alt="" className='icon-work'/>
      </div>
    </div>
  )
}

export default ExpirienceItem