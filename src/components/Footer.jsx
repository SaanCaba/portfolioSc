import React, { useState } from 'react'
import linkedin from './styles/linkedinlogo.png'
import gmail from './styles/gmaillogo.png'
import github from './styles/github.png'
import './styles/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

// cv <a href="https://ibb.co/n05WF2J"><img src="https://i.ibb.co/BPS19DM/Cv-sin-foto-trabajo-formal-joven-blanco-azul.jpg" alt="Cv-sin-foto-trabajo-formal-joven-blanco-azul" border="0" /></a>

  return (
    <div className='footer'>
        <div className='container-linkedin'>
            <a href='https://www.linkedin.com/in/santiago-caballero-82aa241a1' target="_blank" >
              <img className='linkedin' src={linkedin}/>
            </a>
            <Link to='/contact' >
          <img className='gmail' src={gmail} />
           </Link>
            <a href='https://github.com/SaanCaba' target="_blank" >
          <img className='github' src={github} />
            </a>
        </div>
    </div>
  )
}

export default Footer