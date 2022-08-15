import React from 'react'

import { useGlobalContext } from '../context'
import {FaTimes} from 'react-icons/fa'
const Sidebar = () => {
   const {isSidebarOpen,closeSidebar} = useGlobalContext()
  return (
            <div className={`${isSidebarOpen ? 'sidebar sidebar-black vissible' : 'sidebar sidebar-black'}`}>
           <div className={`${isSidebarOpen ? 'sidebar sidebar-red vissible' : 'sidebar sidebar-red'}`}>
             <div className={`${isSidebarOpen ? 'sidebar sidebar-white vissible' : 'sidebar sidebar-white'}`}>
               <ul>
                 <li>sidebar</li>
                 <li>sidebar</li>
                 <li>sidebar</li>
               </ul>
               <FaTimes className='times' onClick={closeSidebar}/>
             </div>
           </div>
          </div>
   
  )
}
export default Sidebar