import React from 'react'
import FooterImg from '../assets/Rectangle 27.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="content">
          <span>Skincare System</span>
          <h1>Let your skin’s health speak for itself!</h1>
          <p>Taking care of you is a lifestyle. Our all green
             products are safe for you and the environment. You are sure to enjoy your skincare journey with our products. </p>
        <button>Shop</button>
        </div>
        <div className="footer-img">
          <img src={FooterImg} alt="" />
        </div>
      </div>

      <div className='footer-remark'>A product of Skincare system <span>cC. 2024</span></div>
    </footer>
  )
}

export default Footer
