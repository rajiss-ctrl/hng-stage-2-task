import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackStar from '../assets/star.svg';
import WhiteStar from '../assets/star-white.svg';
import Cart from '../assets/cart.svg';
import './ProductList.css';
import { useCart } from '../context/ProductContext';

const ProductList = ({ filteredProducts = [] }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state: { products = [] }, dispatch } = useCart();
  const navigate = useNavigate();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const APP_ID = import.meta.env.VITE_APP_ID;
  const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API');
        const response = await fetch(`${API_BASE_URL}/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=1&size=10&Appid=${APP_ID}&Apikey=${API_KEY}`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('API Response:', data);

        if (data.items && Array.isArray(data.items) && data.items.length > 0) {
          dispatch({ type: 'SET_PRODUCTS', products: data.items });
        } else {
          console.log('No items found in API response:', data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!products || products.length === 0) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [dispatch, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Determine which products to display based on the search input
  const displayedProducts = filteredProducts.length > 0 ? filteredProducts : products;

  // If no products found, display a message
  if (displayedProducts.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className='product-list-cont'>
      <div className='product-list'>
        {displayedProducts.map((product) => {
          const image = product.photos[0]?.url;
          return (
            <div key={product.id}>
              <div className="productlist-card">
                <img src={`/api/images/${image}`} alt="" />
                <div className="productlist-card-details-container">
                  <div className="productlist-name-price">
                    <h3>{product.name}</h3>
                    <h3>₦{product.current_price[0]?.NGN[0]}</h3> 
                  </div>
                  <div className="star">
                    <img src={BlackStar} alt="black star" />
                    <img src={BlackStar} alt="black star" />
                    <img src={BlackStar} alt="black star" />
                    <img src={BlackStar} alt="black star" />
                    <img src={WhiteStar} alt="white star" />
                  </div>
                </div>
              </div>
              <div className="productlist-cta">
                <button onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>
                  <img src={Cart} alt="cart icon" />
                  <span>Add To Cart</span>
                </button>
                <button onClick={() => handleProductClick(product.id)}>View Details</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="view-more-products-wrap">
        <button className='view-more-products' onClick={() => { navigate('/all-products') }}>View More</button>
      </div>
    </div>
  );
};

export default ProductList;
