import React from 'react'
import arrow from '../assets/arrow.svg'
import workImg from '../assets/work-item.jpg'
const WorkItem = () => {
  return (
    <div className="work-item">
                        <div className="work-item-img">
                            <img src={workImg} alt="" className="work-image" />
                        </div>    
                            <div className="work-btn-container">
                                <button className="btn work-btn"><a href="#">Demo</a> <img src={arrow} alt="" /></button>
                            <button className="btn work-btn"><a href="#">Github</a><img src={arrow} alt="" /></button>
                            </div>
                            
                        

                    </div>
  )
}

export default WorkItem