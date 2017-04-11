import React from 'react'
import Footer from '../components/footer'
import Navigation from '../components/navbar-scroll'

const About = () => {
  return (
    <div className=' animated fadeIn about-background'>
    <Navigation/>
    <div className='about'>
    </div>
    <Footer
    show={true}/>
    </div>
  )
}

export default About
