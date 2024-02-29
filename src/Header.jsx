import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <h1>
          <Link to='/'>
              <img src="./assets/favicon.ico" title="logo" alt="logo" />
              <p>Template</p>
          </Link>
        </h1>
      <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/services'>Services</Link>
        <Link className='link' to='/contact'>Contact</Link>
      </nav>
    </header>
  )
}
