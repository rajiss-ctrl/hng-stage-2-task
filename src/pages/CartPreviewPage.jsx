import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import './CartPreviewPage.css';
import Product1 from '../assets/product1.svg'
import Product2 from '../assets/product2.svg'
import Product3 from '../assets/product3.svg'
import Product4 from '../assets/product4.svg'
import Product5 from '../assets/product5.svg'
import Trash from '../assets/trash-icon.svg'
import Minus from '../assets/minus.svg'
import Plus from '../assets/plus.svg'
import Transfer from '../assets/transfer.svg'
import CreditCard from '../assets/credit-card.svg'
import ApplePay from '../assets/apple-pay.svg'
import { useNavigate } from 'react-router-dom';

const CartPreviewPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const products = [
    {
      image: `${Product1}`,
      title: 'vitamin C Serum',
      price: "₦18,000",
      size: "Medium",
    },
    {
      image: `${Product2}`,
      title: 'Hair serum',
      price: "₦2,001,000",
      size: "XXL",
    },
    {
      image: `${Product3}`,
      title: 'Oloture skin care set',
      price: "₦78,900",
      size: "Medium",
    },
    {
      image: `${Product4}`,
      title: 'Skin toner',
      price: "₦32,000",
      size: "Small",
    },
    {
      image: `${Product5}`,
      title: 'Skin moisturizer',
      price: "₦205,000",
      size: "Medium",
    },
  ];

  const handlePaymentSelect = (payment) => {
    setSelectedPayment(payment);
  };

  const handleCheckout = () => {
    navigate("/checkout-form");
  }

  const navigate = useNavigate()

  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    if (!checkAll) {
      setCheckedItems(products.map((_, index) => index));
    } else {
      setCheckedItems([]);
    }
  };

  const handleCheckItem = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((item) => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  return (
    <section className='cart-preview-container'>
         <div className="cta-remark-mobile">
            <p> Free deliveries on all orders within Nigeria</p>
      </div>
      <div className="cta-remark">
        <p> Free deliveries on all orders within Nigeria</p>
      </div>
      <NavBar />
      <h1 className='cart-preview'>Cart</h1>
      <div className="cartpreview-wrap">
        <div className="product">
          <table>
            <thead>
              <tr>
                <th className='product-check-all'>
                  <input
                    type="checkbox"
                    checked={checkAll}
                    onChange={handleCheckAll}
                  />
                  Product
                </th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td className='td-flex'>
                    <div className="check-img">
                      <input
                        type="checkbox"
                        checked={checkedItems.includes(index)}
                        onChange={() => handleCheckItem(index)}
                      />
                      <img src={product.image} alt="" />
                    </div>
                    <div className="title-size">
                      <h4>{product.title}</h4>
                      <span>{product.size}</span>
                    </div>
                  </td>
                  <td>
                    <div className="minus-plus">
                      <img src={Minus} alt="" />
                      <span>1</span>
                      <img src={Plus} alt="" />
                    </div>
                    <button>
                      <img src={Trash} alt="" />
                      <span>Delete</span>
                    </button>
                  </td>
                  <td className='price'>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
            <h4 className='for-mobile'>Breakdown</h4>
        <div className="cost">
          <div className="calculation">
            <div className="subtotal">
              <span>Sub-total</span>
              <h4>₦2,798,000</h4>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>₦0.00</span>
            </div>
            <div className="grand-total">
              <span>Grand total</span>
              <span>₦2,800,000</span>
            </div>

            <div className="mode-of-payment">
              <h4>Mode of payment</h4>
              <div
                className={`payment-option bank ${selectedPayment === 'bank' ? 'selected' : ''}`}
                onClick={() => handlePaymentSelect('bank')}
              >
                <span>Bank Transfer</span>
                <img src={Transfer} alt="Bank Transfer" />
              </div>
              <div
                className={`payment-option credit-card ${selectedPayment === 'credit-card' ? 'selected' : ''}`}
                onClick={() => handlePaymentSelect('credit-card')}
              >
                <span>Credit Card</span>
                <img src={CreditCard} alt="Credit Card" />
              </div>
              <div
                className={`payment-option apple-pay ${selectedPayment === 'apple-pay' ? 'selected' : ''}`}
                onClick={() => handlePaymentSelect('apple-pay')}
              >
                <span>Apple Pay</span>
                <img src={ApplePay} alt="Apple Pay" />
              </div>
            </div>
          </div>
          <div className="btn">
            <button onClick={handleCheckout}>Proceed to checkout</button>
          </div>
        </div>
          <div className="btn-mobile">
            <button onClick={handleCheckout}>Proceed to checkout</button>
          </div>
      </div>
      <Footer />
    </section>
  )
}

export default CartPreviewPage
