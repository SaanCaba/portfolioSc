import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Nav.css'

function Nav() {
  return (
    <div>
        <nav className='nav'>
            <ul>
              <Link to='/aboutme'>
                <li>About me</li>
              </Link>
              <Link to='/skills'>
                <li>Skills/Proyects</li>
              </Link>
              <Link to ="/contact">
                <li>Contact</li>
              </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Nav