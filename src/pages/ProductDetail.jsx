import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/ProductContext';
import './ProductDetail.css';
import NavBar from '../components/NavBar';
const ProductDetail = () => {
  const { productId } = useParams();
  const { state } = useCart();
  const product = state.products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <NavBar/>
    <div className='productdetails'>
      <img src={`/api/images/${product.photos[0].url}`} alt={product.name} />
      <div className="details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <h3>₦{product.current_price[0]?.NGN[0]}</h3>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
