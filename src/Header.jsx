import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <h1>
          <Link to='/'>
              <img src="https://firebasestorage.googleapis.com/v0/b/template-64987.appspot.com/o/logo.webp?alt=media&token=eb051ac6-fd50-4487-abaa-186e48b4b218" title="logo" alt="logo" />
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
