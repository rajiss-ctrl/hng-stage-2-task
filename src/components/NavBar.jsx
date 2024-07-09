import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import Search from '../assets/search-icon.svg'
import Cart from '../assets/cart.svg'
import CartGreen from '../assets/cart-green.svg'
import User from '../assets/user.svg'
import BugerMenu from '../assets/Burger-Menu.svg'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [burger, setBurger]= useState(false)
  const handleBurgerMenu =()=>{
    console.log("I am clicked")
    setBurger(prev=> !prev)
  }
  const location = useLocation()
  console.log(location)
  return (
    <div className='nav-container'>
    <nav>
      <div className="logo">
      <Link to="/"><img src={Logo} alt="" /></Link>
      </div>
      <ul className={`${burger ? "hidden" : "open"} `}>
        <li className={`hover-action ${location.pathname === "/"  ? "active" : "inActive" }`}><Link to="/">Home</Link></li>
        <li className='hover-action'>Shop</li>
        <li className='hover-action'>Categories</li>
        <li className='hover-action'>About</li>
        <li className='hover-action'>Blog</li>
        <li className='hover-action'> Contact</li>
      </ul>
      <div className="nav-item-right">
      <div className="search">
        <img src={Search} alt="" />
        <input placeholder='Searh' type="text" />
      </div>
      <Link className='cart-total' to="/cart-preview-page">
      <div className="cart-box"></div>
      {
        location.pathname === "/cart-preview-page" ?
        <img  src={CartGreen} alt="" />:
        <img  src={Cart} alt="" />
       
      }
      </Link>
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
