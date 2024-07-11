import React from 'react'
import Logo from '../assets/logo.svg'
import Times from '../assets/times.svg'
import './MobileNavbar.css';
import { Link } from 'react-router-dom';

const MobileNavbar = ({handleBurgerMenu}) => {
  return (
    <nav className='mobile-nav-container'>
      <div className="mobile-nav-logo">
        <Link to={"/"}><img src={Logo} alt="" /></Link>
        <img onClick={handleBurgerMenu} src={Times} alt="" />
      </div>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link>Shop</Link>
        </li>
        <li>
            <Link>Categories</Link>
        </li>
        <li>
            <Link>About</Link>
        </li>
        <li>
            <Link>Contact</Link>
        </li>
        <li>
            <Link>Blog</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavbar
