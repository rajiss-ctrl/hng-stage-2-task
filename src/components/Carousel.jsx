import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cart from '../assets/shopping-bag.svg';

const CarouselComponent = ({ items }) => {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: true,
    infinite: true,
    customPaging: function (i) {
      return (
        <button type="button">
          {i + 1}
        </button>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3, /* Show 1 slide at a time on small devices */
          centerMode: true, /* Enable center mode on small devices */
          dots: false, /* Hide dots on small devices */
          swipe: true, /* Enable swipe on mobile devices */
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-card">
              <img src={item.image} alt={item.title} />
              <div className="card-details-container">
                <h3>{item.price}</h3>
                <p>{item.description}</p>
                <div className="star">
                  <img src={item.blackstar} alt="black star" />
                  <img src={item.blackstar} alt="black star" />
                  <img src={item.blackstar} alt="black star" />
                  <img src={item.blackstar} alt="black star" />
                  <img src={item.whitestar} alt="white star" />
                </div>
              </div>
              <button>
                <img src={Cart} alt="cart icon" />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
