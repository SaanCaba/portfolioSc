import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './styles/Aboutme.css'

function Aboutme() {
  return (
    <div className='cont-all'>
          <Link to='/'>
      <button className='btn-home'>HOME</button>
    </Link>
    <div className='container-aboutme'>

    <p className='p-content'>Hola a todos/as que lean esto,
     mi nombre es Santiago, y estoy en busca de nuevos desafíos, <br/>
     para poder desarrollarme dentro del mundo IT, con una primer experiencia laboral. <br/>
     Mis estudios fueron realizados en el Bootcamp de SoyHenry durante 4 meses.
    </p>
    </div>
    <div className='container-pais'>
    <p className='p-pais'>Soy de Buenos Aires, Argentina 🧉</p>
    </div>
    <div className='footer-cont'>
    <Footer />
    </div>
    </div>
  )
}

export default Aboutme