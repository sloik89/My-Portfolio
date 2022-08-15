import React from 'react'

import { useGlobalContext } from '../../context'
import {FaTimes} from 'react-icons/fa'
import SocialIcons from '../SocialIcons/SocialIcons'
import './sidebar.css'
import {mainLinks} from '../../assets/mainLinks'
const Sidebar = () => {
   const {isSidebarOpen,closeSidebar,darkMode} = useGlobalContext()
  return (
            <div className={`${isSidebarOpen ? 'sidebar sidebar-black vissible' : 'sidebar sidebar-black'}`}>
           <div className={`${isSidebarOpen ? 'sidebar sidebar-red vissible' : 'sidebar sidebar-red'}`}>
             <div className={`${isSidebarOpen ? 'sidebar sidebar-white vissible' : 'sidebar sidebar-white'}`}>
                <div className="links-container">

               
               <ul className='sidebar-links'>
                 {mainLinks.map(elem=>{
                    const {id,text,href} = elem
                    return (
                        <li key={id}><a href={href} onClick={closeSidebar}>{text}</a></li>
                    )
                 })}
               </ul>
               
               <FaTimes className='times' onClick={closeSidebar}/>
               <SocialIcons/>
             </div>
             
              </div>
           </div>
          </div>
   
  )
}
export default Sidebar