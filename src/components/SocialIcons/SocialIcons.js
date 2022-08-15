import React from 'react'
import arrow from '../../assets/fall.svg'
import fallIcons from '../../assets/fallowing-icons'
import './socialIcons.css'
const Icons = () => {

  return (
    <div className="icons-wrapper">
        <h3 className='icons-text'>fallowing me:</h3>
        <img src={arrow} alt="" className='arrow-down'/>
        <div className="icons-container">
            {fallIcons.map((elem,idx) => {
                return <a key={elem.id} href="">
                    <img src={elem.url} alt="" />
                </a>
            })}
        </div>
    </div>
  )
}

export default Icons