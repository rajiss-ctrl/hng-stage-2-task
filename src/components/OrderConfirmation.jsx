import React from 'react'
import NavBar from './NavBar';
import OrderImg from '../assets/order-confirm.jpg'
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  return (
    <div>
      <NavBar/>
      <div className="confirmation-remark">
        <h4>Order completed! Your order is ready for shippment.</h4>
        <img src={OrderImg} alt="" />
      </div>
    </div>
  )
}

export default OrderConfirmation
