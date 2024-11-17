import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/file.png'

const Header = () => {
  return (
    <>
    <div className='h-container'>
      <header className="header">
          <img src={logo} className="logo-section"/>

        <nav className="navbar">
        <NavLink to="/signin" className="navbar-links">Sign In</NavLink>
        </nav>
        
        </header>
        </div>
    </>
  )
}

export default Header
