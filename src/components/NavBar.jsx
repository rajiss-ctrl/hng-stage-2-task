import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Chevron from '../assets/chevron-down.svg'
import Search from '../assets/search-icon.svg'
import Cart from '../assets/cart.svg'
import User from '../assets/user.svg'
import BugerMenu from '../assets/Burger-Menu.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [burger, setBurger]= useState(false)
  const handleBurgerMenu =()=>{
    setBurger(true)
  }
  return (
    <div className='nav-container'>
    <nav>
      <div className="logo">
      <Link to="/"><img src={Logo} alt="" /></Link>
      </div>
      <ul className={`${burger ? "hidden" : "open"} `}>
        <li className='hover-action'><Link to="homepage">Home</Link></li>
        <li className='hover-action'>Shop</li>
        <li className='hover-action'> <span>Categories</span> <img src={Chevron} alt="" /></li>
        <li className='hover-action'>About</li>
        <li className='hover-action'>Blog</li>
        <li className='hover-action'> <span>Contact</span> <img src={Chevron} alt="" /></li>
      </ul>
      <div className="nav-item-right">
      <div className="search">
        <img src={Search} alt="" />
        <input placeholder='Searh' type="text" />
      </div>
      <Link to="cartpreviewpage"><img src={Cart} alt="" /></Link>
      <img src={User} alt="" />
      <img onClick={handleBurgerMenu} className='burger-menu' src={BugerMenu} alt="" />
      </div>

    </nav>
      <div className="search-mobile">
        <img src={Search} alt="" />
        <input placeholder='Searh' type="text" />
      </div>
    </div>
  )
}

export default NavBar
