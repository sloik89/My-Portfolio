import React,{useEffect, useState} from 'react'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {BsFillSunFill} from "react-icons/bs"
import { useGlobalContext } from '../../context'
import './darkmode.css'

const DarkMode = () => {
    const {darkMode,handleDarkMode} = useGlobalContext()
    
  return (
    <div className={`dark-mode ${darkMode ? 'theme-dark' : 'theme-light'}`} onClick={handleDarkMode}>
        <BsFillMoonStarsFill className='moon-icon'/>
        <BsFillSunFill className='sun-icon'/>
    </div>
  )
}

export default DarkMode