// CarouselComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CarouselComponent = ({ items }) => {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: false,
    infinite: true,
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
          slidesToShow: 3,
          centerMode: false,
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
              <h3>{item.price}</h3>
              <p>{item.description}</p>
              <div className="star">
                <img src={item.blackstar} alt="" />
                <img src={item.blackstar} alt="" />
                <img src={item.blackstar} alt="" />
                <img src={item.blackstar} alt="" />
                <img src={item.whitestar} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
