import React from 'react'
import './header.css'
const Header = ({header}) => {
  return (
    <h2 className='section-header'>
        {header}
    </h2>
  )
}

export default Header