import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  const location = useLocation();

  const [hamburgerVisibility, setHamburgerVisibility] = useState('invisible')
  const [hamburgerIcon, setHamburgerIcon] = useState(faBars)

  const handleHamburgerIcon = () => {
    if (hamburgerIcon === faBars) {
      setHamburgerIcon(faXmark)
      setHamburgerVisibility('visible')
    } else {
      setHamburgerIcon(faBars)
      setHamburgerVisibility('invisible')
    }
  }

  const handleLinkClick = () => {
    setHamburgerIcon(faBars)
    setHamburgerVisibility('invisible')
  }

  return (
    <header>
      <h1>
        <Link to='/'>
          <img src="https://firebasestorage.googleapis.com/v0/b/template-64987.appspot.com/o/logo.webp?alt=media&token=eb051ac6-fd50-4487-abaa-186e48b4b218" title="logo" alt="logo" />
          <p>Your business</p>
        </Link>
      </h1>

      <nav className={`${hamburgerVisibility}`}>
        <Link onClick={handleLinkClick} className={`link ${location.pathname === '/' ? 'active-link' : ''}`} to='/'>Home</Link>
        <Link onClick={handleLinkClick} className={`link ${location.pathname === '/services' ? 'active-link' : ''}`} to='/services'>Services</Link>
        <Link onClick={handleLinkClick} className={`link ${location.pathname === '/contact' ? 'active-link' : ''}`} to='/contact'>Contact</Link>
      </nav>

      <div className="hamburger-menu" onClick={handleHamburgerIcon}>
        <FontAwesomeIcon icon={hamburgerIcon} />
      </div>
    </header>
  )
}
