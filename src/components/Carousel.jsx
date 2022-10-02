import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import './styles/Carousel.css'
import Footer from './Footer'
import pifood from './styles/imagenes/pifood.jpg'
import calculadora from './styles/imagenes/calculadora.jpg'
import { Link } from 'react-router-dom';

const Container = styled.div`
height:100vh;
overflow-x:scroll;
overflow-y:hidden;
overflow-x:hidden;

`

const CarouselImg = styled.img`
height:250px;
opacity: 0;
width:250px;
margin:auto;
transition:1s;
&.loaded{
    opacity:1;
}
`
const CarouselButtonContainer = styled.div`
height:400px;
display:inline-block;
margin-top:20px;
position:absolute;
top:15%;
left:44.4%;
`

const FooterContainer = styled.div`
    position:absolute;
    top:-240px;
    left:613px;
`

function Carousel() {
    const images = [
        'js.png','react.png','redux.png','nodejs.png','expressLogo.png','postgresql.png','html.png','css.png'
    ]
    const[selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [loaded, setLoaded] = useState(false)
    const selectNewImage = (index, images, next = true,) => {
        setLoaded(false)
        //settimeout, para que se noten los efectos!
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0 ;
            const nextIndex = next ? 
            condition ? selectedIndex + 1 : 0
            : condition ? selectedIndex - 1 : images.length - 1;
            
            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex) 
        }, 1000)

    }

    useEffect(() => {
        let boolean = true
        if(boolean){
            let timeout = setTimeout(() => {
                selectNewImage(selectedIndex, images)
            },2000)

            return () => clearTimeout(timeout)
        }
    },[selectedIndex])



    // const previous = () => {
    //     selectNewImage(selectedIndex,images, false)
    //     //false, porque no va para adelante
    // }

    // const next = () => {
    //     selectNewImage(selectedIndex,images)
    // }

  return (
    <div className='cont-all'>
    <Container>
    <Link to=''>
            <button className='btn-home'>HOME</button>
    </Link>
    <CarouselButtonContainer>
        <CarouselImg src={require(`./styles/imagenes/${selectedImage}`)} alt = "not found" className={loaded ? 'loaded' : ''} onLoad={() => setLoaded(true)} />
        <div>
        {/* <CarouselButton onClick={()=>previous()}>{'<'}</CarouselButton> */}
        {/* <CarouselButton onClick={()=>next()}>{'>'}</CarouselButton> */}
        </div>
    </CarouselButtonContainer>
    <div className='div-skills'>
        <p>
         Dev Skills: JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS.
        </p>
    </div>
    <p className='title-proyectos'>Proyects:</p>
    <div className='div-proyectos'>
        <div className='pi-food'>
            <a href='https://demo-front-foodapp.vercel.app/' target="_blank" ><img className='img' src={pifood}  /></a>
        </div>
        <div className='calculadora'>
            <a  href='https://github.com/SaanCaba/ProyectoCalculadora'  target="_blank"  ><img className='img' src={calculadora}  /></a>
        </div>
    </div>
    <FooterContainer>
    <Footer />
    </FooterContainer>
    </Container>
    </div>
  )
}

export default Carousel