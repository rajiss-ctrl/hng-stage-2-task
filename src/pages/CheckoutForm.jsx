import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './CheckoutForm.css';
import Leave from '../assets/leave.svg'
import { useForm } from 'react-hook-form';

const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

    return (
        <section className='checkout'>
          <NavBar/>
          <div className="checkoutform-wrapper">
          <img className='checkout' src={Leave} alt="" />
          <h1>Checkout</h1>
          <div className="form-container">
            <div className="form1">
              <div className="">
                <img src="" alt="" />
                <h4>Billing Address</h4>
              </div>
            <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input 
              type="text" 
              placeholder='Phone Number'
              {...register('phoneNumber', { required: true, pattern: /^\d{10}$/ })} 
            />
            {errors.phoneNumber && <p>Phone number is required and should be 10 digits.</p>}
          </div>
          
          <div>
            <input 
              type="text"
              placeholder='Country' 
              {...register('country', { required: true })} 
            />
            {errors.country && <p>Country is required.</p>}
          </div>
          
          <div>
            <input 
              type="text"
              placeholder='House Address' 
              {...register('houseAddress', { required: true })} 
            />
            {errors.houseAddress && <p>House address is required.</p>}
          </div>
          
          <div>
            <input 
              type="text"
              placeholder='Postal Code' 
              {...register('postalCode', { required: true, pattern: /^\d{5}$/ })} 
            />
            {errors.postalCode && <p>Postal code is required and should be 5 digits.</p>}
          </div>
          
          <div style={{ display: 'flex', gap: '10px' }}>
            <div>
              <input 
                type="text"placeholder='City'
                {...register('city', { required: true })} 
              />
              {errors.city && <p>City is required.</p>}
            </div>
            
            <div>
              <input 
                type="text" 
                placeholder='Region'
                {...register('region', { required: true })} 
              />
              {errors.region && <p>Region is required.</p>}
            </div>
          </div>
          
          <button type="submit">Submit</button>
        </form>
            </div>
            <div className="form2">
                <form action="">
                  <div className="">
                    {/* <img src="" alt="" /> */}
                    <h4>Credit card details</h4>
                    <input type="text" />
                    <input type="text" />
                    <div className="ex-date-cvv">
                      <input type="text" />
                      <input type="text" />
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
