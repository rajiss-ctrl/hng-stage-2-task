import React from 'react'
import NavBar from './NavBar'
import HeroImg from '../assets/Frame 23.svg'

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className="navbar">
        <NavBar/>
      </div>
      <div className="hero-content">
        <div className="content">
          <span>Skincare System</span>
          <h1>Healthy products that age you backwards</h1>
          <p>At skincare system we do not just make promises. 
            There’s a very long list of satisfied customers over the years and we are glad to share the goodness of natural and healthy skin with you</p>
        <button>Shop</button>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
