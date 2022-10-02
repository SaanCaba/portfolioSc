import React from 'react'
import './styles/Content.css'
import perfil from './styles/fotoperfil.jpg'


function Content() {
  return (
    <div className='containter-content'>
      <div className='hijo'>
        <p>Santiago Caballero
          <br/>
          Desarrollador Web FullStack.
        </p>
        <img className='ft-perfil'  src={perfil}/>
      </div>
    </div>
  )
}

export default Content