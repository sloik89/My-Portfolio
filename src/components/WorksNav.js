import React from 'react'
import '../css/worksNav.css'
const WorksNav = () => {
  return (
    <ul className="works-btns">
      <li>
        <button className="work-btn">
          All
        </button>
        </li>
      <li>
        <button className="work-btn">
          React
        </button>
      </li>
      <li>
        <button className="work-btn">
          JavaScript
        </button>
        </li>
      <li>
        <button className="work-btn">
          Node
        </button>
      </li>
      <li>
        <button className="work-btn">
          HTML/CSS
        </button>
        </li>
    </ul>
  )
}

export default WorksNav