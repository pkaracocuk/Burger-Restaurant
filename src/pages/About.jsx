import React from 'react'
import BannerImage from '../assets/1beef.jpg'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
        <div className='aboutBottom'>
            <h1> About Us</h1>
            <p>We serve delicious burgers with passion at our hamburger shop. Using the freshest and highest quality ingredients, we create unforgettable flavors with our creative recipes. Providing a warm atmosphere, we strive to exceed burger lovers' expectations and ensure an enjoyable experience. Join us and indulge in the pleasure of burgers!</p>
        </div>
    </div>
  )
}

export default About