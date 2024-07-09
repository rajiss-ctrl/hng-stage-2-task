import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './CheckoutForm.css';
import Leave from '../assets/leave.svg'
import Map from '../assets/map.svg'
import CreditCard from '../assets/credit-card.svg'
import { useForm } from 'react-hook-form';

const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

    return (
        <section className='checkout'>
            <div className="cta-remark">
       <p> Free deliveries on all orders within Nigeria</p>
      </div>
          <NavBar/>
          <div className="checkoutform-wrapper">
          <img className='checkout' src={Leave} alt="" />
          <h1>Checkout</h1>
          <div className="form-container">
            <div className="form1">
              <div className="billing">
                <img src={Map} alt="" />
                <h4>Billing Address</h4>
              </div>
            <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input 
              type="text" 
              placeholder='Phone Number'
              {...register('phoneNumber', { required: true, pattern: /^\d{10}$/ })} 
            />
            
          </div>
          
          <div>
            <input 
              type="text"
              placeholder='Country' 
              {...register('country', { required: true })} 
            />
            
          </div>
          
          <div>
            <input 
              type="text"
              placeholder='House Address' 
              {...register('houseAddress', { required: true })} 
            />
            
          </div>
          
          <div>
            <input 
              type="text"
              placeholder='Postal Code' 
              {...register('postalCode', { required: true, pattern: /^\d{5}$/ })} 
            />
            
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <div>
              <input 
                type="text"placeholder='City'
                {...register('city', { required: true })} 
              />
              </div>
            
            <div>
              <input 
                type="text" 
                placeholder='Region'
                {...register('region', { required: true })} 
              />
              </div>
          </div>
          
          <h4>Remeber my information</h4>
          <div className="remember-btn">
            <input type="checkbox" name="" id="" />
            <p>Enter these details automatically for future transactions</p>  
          </div>
          {errors.phoneNumber 
          || errors.country || 
          errors.houseAdsress||
          errors.postalCode ||
          errors.city ||
          errors.region && <p className='error'>All fields under credit card and billing address are required to process payment</p> }
        </form>
            </div>
            <div className="form2">
                  <div className="credit-card-flex">
                    <img src={CreditCard} alt="" />
                    <h4>Credit card details</h4>
                  </div>
                <form action="">
                  <div className="">
                    <input type="text" placeholder='Card Number' />
                    <input type="text" placeholder='Card Name' />
                    <div className="ex-date-cvv">
                      <input type="text" placeholder='Expiry Date' />
                      <input type="text" placeholder='CVV' />
                    </div>
                    <div className="form2-btn">
                    <button>Make Payment</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
          </div>
          <Footer/>
        </section>
  )
}

export default CheckoutForm
