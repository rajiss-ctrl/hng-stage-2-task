import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './CheckoutForm.css';
import Leave from '../assets/leave.svg';
import Map from '../assets/map.svg';
import CreditCard from '../assets/credit-card.svg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/order-confirmation');
  };

  return (
    <section className='checkout'>
      <div className="cta-remark-mobile">
        <p> Free deliveries on all orders within Nigeria</p>
      </div>
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
                {errors.phoneNumber && <p className='error'>Phone Number is required and should be 10 digits</p>}
              </div>
              <div>
                <input 
                  type="text"
                  placeholder='Country' 
                  {...register('country', { required: true })} 
                />
                {errors.country && <p className='error'>Country is required</p>}
              </div>
              <div>
                <input 
                  type="text"
                  placeholder='House Address' 
                  {...register('houseAddress', { required: true })} 
                />
                {errors.houseAddress && <p className='error'>House Address is required</p>}
              </div>
              <div>
                <input 
                  type="text"
                  placeholder='Postal Code' 
                  {...register('postalCode', { required: true, pattern: /^\d{5}$/ })} 
                />
                {errors.postalCode && <p className='error'>Postal Code is required and should be 5 digits</p>}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div>
                  <input 
                    type="text" 
                    placeholder='City'
                    {...register('city', { required: true })} 
                  />
                  {errors.city && <p className='error'>City is required</p>}
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder='Region'
                    {...register('region', { required: true })} 
                  />
                  {errors.region && <p className='error'>Region is required</p>}
                </div>
              </div>
              <h4>Remember my information</h4>
              <div className="remember-btn">
                <input type="checkbox" />
                <p>Enter these details automatically for future transactions</p>  
              </div>
              {errors.phoneNumber || errors.country || errors.houseAddress || errors.postalCode || errors.city || errors.region ? (
                <p className='error'>All fields under billing address are required to process payment</p>
              ) : null}
            </form>
          </div>
          <div className="form2">
            <div className="credit-card-flex">
              <img src={CreditCard} alt="" />
              <h4>Credit card details</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input 
                  type="text" 
                  placeholder='Card Number'
                  {...register('cardNumber', { required: true, pattern: /^\d{16}$/ })} 
                />
                {errors.cardNumber && <p className='error'>Card Number is required and should be 16 digits</p>}
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder='Card Name'
                  {...register('cardName', { required: true })} 
                />
                {errors.cardName && <p className='error'>Card Name is required</p>}
              </div>
              <div className="ex-date-cvv" style={{ display: 'flex', gap: '10px' }}>
                <div>
                  <input 
                    type="text" 
                    placeholder='Expiry Date'
                    {...register('expiryDate', { required: true, pattern: /^(0[1-9]|1[0-2])\/\d{4}$/ })} 
                  />
                  {errors.expiryDate && <p className='error'>Expiry Date is required and should be in MM/YYYY format</p>}
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder='CVV'
                    {...register('cvv', { required: true, pattern: /^\d{3}$/ })} 
                  />
                  {errors.cvv && <p className='error'>CVV is required and should be 3 digits</p>}
                </div>
              </div>
              <div className="form2-btn">
                <button type="submit">Make Payment</button>
              </div>
              {(errors.cardNumber || errors.cardName || errors.expiryDate || errors.cvv) && (
                <p className='error'>All fields under credit card details are required to process payment</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default CheckoutForm;
