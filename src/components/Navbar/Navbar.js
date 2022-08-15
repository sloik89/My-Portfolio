import React,{useEffect,useState} from 'react'

import {HiOutlineMenuAlt3} from "react-icons/hi"
import {mainLinks} from '../../assets/mainLinks'
import logoBlack from '../../assets/logo/logoblack.svg'
import logoWhite from '../../assets/logo/logo.svg'
import LangSwitcher from '../LangSwitcher/LangSwitcher'
import DarkMode from '../darkMode/DarkMode'
import './navbar.css'
import { useGlobalContext } from '../../context'
const Navbar = () => {
    const {openSidebar,isSidebarOpen,darkMode,lang} = useGlobalContext()
    const [fixedNav,setFixedNav] = useState(false)
    useEffect(() =>{
        const event = window.addEventListener('scroll',() =>{
            console.log(window.scrollY);
            if(window.scrollY > 100){
                setFixedNav(true)
            }else{
                setFixedNav(false)
            }
        })
        return () =>{
            window.removeEventListener('scroll',event)
        }
    },[fixedNav])
    
  return (
    <nav className={`nav ${fixedNav ? 'fixedNav' : ''}`}>
        <div className="section-center">
            <div className="logo">
                <img src={darkMode ? logoWhite : logoBlack} alt="" className="logo-img" />
            </div>
            <ul className={`nav-links ${darkMode ? 'nav-dark' : ''}`}>
                {mainLinks.map(elem=>{
                    const {id,text,href,textPl} = elem
                    return(
                        <li key={id}> 
                        <a href={href}>
                            {`${lang == 'eng' ? text : textPl}`}
                        </a>
                        </li>
                    )
                })}
            </ul>
            <div className="btn-container">
           <LangSwitcher/>
           <DarkMode />
            <button className="menu-bars" onClick={openSidebar}>
                <HiOutlineMenuAlt3/>
                <div className="circle"></div>
            </button>
            </div>
    
        </div>
    </nav>
  )
}

export default Navbar