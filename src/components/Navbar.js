import React from 'react'
import logo from '../assets/logo.svg'
import logoBlack from '../assets/logoblack.svg'
import {FaBars} from 'react-icons/fa'
import {BsFillMoonFill} from 'react-icons/bs'
import { useGlobalContext } from '../context'
import '../css/Navbar.css'
const Navbar = () => {
    const {openSidebar,darkMode,setDarkMode} = useGlobalContext()
    
  return (
      <nav className={` ${darkMode ? 'darkTheme' : ''}`}> 
        <div className={`nav-center`}>
            <img src={`${darkMode ? logoBlack : logo}`} alt="" className='logo'/>
            <ul className="nav-links">
            <li>
                home
            </li>
            <li>
                about
            </li>
            <li>
                projects
            </li>
                        <li>
                Experience
            </li>
            <li>
                contact
            </li>
            </ul>
            
            <div className="nav-options">
                
                <button className="lang">
                    PL
                </button>
                <button className={`dark-mode ${darkMode ? 'shine' :''}`} onClick = {()=>setDarkMode(!darkMode)}>
                    <BsFillMoonFill className='moon'/>
                </button>
                 <button className="bars" onClick={openSidebar}>
                    <FaBars/>     
                </button>     
            </div>
           
        </div>
    </nav>
  )
}

export default Navbar