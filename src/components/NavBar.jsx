import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Search from '../assets/search-icon.svg';
import Cart from '../assets/cart.svg';
import CartGreen from '../assets/cart-green.svg';
import User from '../assets/user.svg';
import BugerMenu from '../assets/Burger-Menu.svg';
import Times from '../assets/times.svg';
import { Link, useLocation } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import { useCart } from '../context/ProductContext';

const NavBar = () => {
  const [burger, setBurger] = useState(false);
  const { state } = useCart();
  const cartItemCount = state.cart.reduce((count, item) => count + item.quantity, 0);

  const handleBurgerMenu = () => {
    console.log("I am clicked");
    setBurger(prev => !prev);
  };

  const location = useLocation();
  console.log(location);

  return (
    <div className='nav-container'>
      <nav>
        <div className={`${!burger ? "hidden" : "open"} `}>
          <MobileNavbar burger={burger} handleBurgerMenu={handleBurgerMenu} />
        </div>
        <div className="logo">
          <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
        <ul>
          <img onClick={handleBurgerMenu} className='times' src={Times} alt="" />
          <li className={`hover-action ${location.pathname === "/" ? "active" : "inActive"}`}>
            <Link to="/">Home</Link>
          </li>
          <li className='hover-action'>Shop</li>
          <li className='hover-action'>Categories</li>
          <li className='hover-action'>About</li>
          <li className='hover-action'>Blog</li>
          <li className='hover-action'>Contact</li>
        </ul>
        <div className="nav-item-right">
          <div className={`search`}>
            <img src={Search} alt="" />
            <input placeholder='Search' type="text" />
          </div>
          <Link className='cart-total' to="/cart-preview-page">
            <div className="cart-box">{cartItemCount}</div>
            {
              location.pathname === "/cart-preview-page" ?
                <img src={CartGreen} alt="" /> :
                <img src={Cart} alt="" />
            }
          </Link>
          <img src={User} alt="" />
          <img onClick={handleBurgerMenu} className='burger-menu' src={BugerMenu} alt="" />
        </div>
      </nav>
      <div className={`${location.pathname === "/checkout-form" || location.pathname === "/cart-preview-page" ? "search-mobile-none" : "search-mobile"}`}>
        <img src={Search} alt="" />
        <input placeholder='Search' type="text" />
      </div>
    </div>
  );
};

export default NavBar;
