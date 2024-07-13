import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from './Carousel';
import Img1 from '../assets/slide1.png';
import Img2 from '../assets/slide2.png';
import BlackStar from '../assets/star.svg';
import WhiteStar from '../assets/star-white.svg';
import Img3 from '../assets/slide3.png';
import ProductList from './ProductList';
import './FeatureProduct.css';
const items = [
  {
    image: `${Img1}`,
    title: '',
    price: "₦127,000 - ₦200,000",
    description: 'Night care set',
    blackstar: `${BlackStar}`,
    whitestar: `${WhiteStar}`,
  },
  {
    image: `${Img2}`,
    title: 'Card 2',
    price: "₦127,000 - ₦200,000",
    description: 'Night care set',
    blackstar: `${BlackStar}`,
    whitestar: `${WhiteStar}`,
  },
  {
    image: `${Img3}`,
    title: 'Card 3',
    price: "₦127,000 - ₦200,000",
    description: 'Night care set',
    blackstar: `${BlackStar}`,
    whitestar: `${WhiteStar}`,
  },
  {
    image: `${Img3}`,
    title: 'Card 4',
    price: "₦127,000 - ₦200,000",
    description: 'Night care set',
    blackstar: `${BlackStar}`,
    whitestar: `${WhiteStar}`,
  },
];

const FeatureProduct = () => {
  
  return (
    <section className='feature-product'>
       
      <h2>Featured products</h2>
      <p>Our best sellers for this week!</p>
      <div className="carousel-wrapper">
        <CarouselComponent items={items} />
      </div>
      <div className="product-list_feature">
        <ProductList/>
      </div>
      <div className="center">
        <div className="rectangle-img">
          <div className="feature-1">
            <h4>New Arrival - hand cream</h4>
            <button>Shop</button>
          </div>
          <div className="feature-2">
            <h4>25% off hair & makeup!</h4>
            <p>We’re celebrating our 4th year in business! All products under hair and makeup categories are on sales at 25% off!</p>
            <button>Shop</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
