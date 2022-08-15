import React from 'react'

import arrow from '../assets/fall.svg'
import fallIcons from '../assets/fallowing-icons'

const Icons = () => {
    console.log(fallIcons);
  return (
    <div className="icons">
        <h3 className='icons-text'><span>fallowing</span> <span>me:</span></h3>
        <img src={arrow} alt="" />
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