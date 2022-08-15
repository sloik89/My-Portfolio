import React from 'react'
import './portfolioItem.css'
import portfolioImg from '../../assets/work-item.jpg'
import BtnRound from '../btnRound/BtnRound'
const PortfolioItem = () => {
  return (
    <article className='portfolio-item'>
      <div className="portfolio-img-container">
        <img src={portfolioImg} alt="" className="portfolio-img" />
      </div>
      <div className="portfolio-item-btns">
        <BtnRound title='go github' dark={true}/>
        <BtnRound title='go live' dark={true}/>
      </div>
      
      </article>
  )
}

export default PortfolioItem