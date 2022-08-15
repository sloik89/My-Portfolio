import React,{useState} from 'react'
import './langswitcher.css'
import { useGlobalContext } from '../../context'
const LangSwitcher = () => {
 const {lang,handleSwitcher} = useGlobalContext()
  
  return (
    <div className='switcher'>
        <label htmlFor="checkbox" className='label-pl'> Eng</label>
        <input type="checkbox" className='toogle' id='checkbox' />
        <button onClick={handleSwitcher} className={`checkbox-shape ${lang === 'eng' ? 'moveEng' : 'movePl'}`}></button>
        <label htmlFor="checkbox" className='label-eng'> Pl</label>
    </div>
  )
}

export default LangSwitcher