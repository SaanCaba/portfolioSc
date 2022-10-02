import React from 'react'
import './styles/Skills.css'
import Carousel from './Carousel'
import Footer from './Footer'

function Skills() {
  return (
    <div>
        <Carousel autoPlay={true} />
        <Footer />
    </div>
  )
}

export default Skills