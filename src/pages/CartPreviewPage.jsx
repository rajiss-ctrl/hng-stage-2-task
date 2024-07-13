import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import './CartPreviewPage.css';
import Trash from '../assets/trash-icon.svg';
import Minus from '../assets/minus.svg';
import Plus from '../assets/plus.svg';
import Transfer from '../assets/transfer.svg';
import CreditCard from '../assets/credit-card.svg';
import ApplePay from '../assets/apple-pay.svg';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/ProductContext';

const CartPreviewPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
    }
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalPrice = state.cart.reduce((total, item) => total + item.current_price[0]?.NGN[0] * item.quantity, 0);

  const handlePaymentSelect = (payment) => {
    setSelectedPayment(payment);
  };

  const handleCheckout = () => {
    navigate('/checkout-form');
  };

  const navigate = useNavigate();

  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    if (!checkAll) {
      setCheckedItems(state.cart.map((item) => item.id));
    } else {
      setCheckedItems([]);
    }
  };

  const handleCheckItem = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((itemId) => itemId !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  return (
    <section className='cart-preview-container'>
      <div className="cta-remark-mobile">
        <p>Free deliveries on all orders within Nigeria</p>
      </div>
      <div className="cta-remark">
        <p>Free deliveries on all orders within Nigeria</p>
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
              {state.cart.map((item, index) => {
                const image = item?.photos[0]?.url;
                return (
                  <tr key={item.id}>
                    <td className='td-flex'>
                      <div className="check-img">
                        <input
                          type="checkbox"
                          checked={checkedItems.includes(item.id)}
                          onChange={() => handleCheckItem(item.id)}
                        />
                        <img src={`/api/images/${image}`} alt="" />
                      </div>
                      <div className="title-size">
                        <h4>{item.name}</h4>
                        {/* <span>{item.size}</span> */}
                      </div>
                    </td>
                    <td>
                      <div className="minus-plus">
                        <img onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} src={Minus} alt="" />
                        <span>{item.quantity}</span>
                        <img onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} src={Plus} alt="" />
                      </div>
                      <button onClick={() => handleRemoveFromCart(item.id)}>
                        <img src={Trash} alt="trash icon" />
                        <span>Delete</span>
                      </button>
                    </td>
                    <td className='price'>₦{item.current_price[0]?.NGN[0]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h4 className='for-mobile'>Breakdown</h4>
        <div className="cost">
          <div className="calculation">
            <div className="subtotal">
              <span>Sub-total</span>
              <h4>₦{totalPrice}</h4>
            </div>
            <div className="discount">
              <span>Discount</span>
              <span>₦0.00</span>
            </div>
            <div className="grand-total">
              <span>Grand total</span>
              <span>₦{totalPrice}</span>
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
  );
};

export default CartPreviewPage;
