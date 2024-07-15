// OrderConfirmation.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import OrderImg from '../assets/order-confirm.jpg';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div>
      <NavBar />
      <div className="confirmation-remark">
        <h4>Order completed! Your order is ready for shipment.</h4>
        <img src={OrderImg} alt="Order Confirmation" />
      </div>
    </div>
  );
};

export default OrderConfirmation;
