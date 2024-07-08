import React from 'react'
import CarouselComponent from './Carousel';
import Img1 from '../assets/Rectangle 43.svg'
import Img2 from '../assets/Frame 70.svg'
import Img4 from '../assets/Frame 73.svg'
import BlackStar from '../assets/star.svg'
import WhiteStar from '../assets/star-white.svg'
import Img3 from '../assets/Rectangle 8.svg'


const items = [
  {
    image: `${Img1}`,
    title: '',
    price:"₦12,000 - ₦28,000",
    description: 'Oloture lip palm oil',
    blackstar:`${BlackStar}`,
    whitestar:`${WhiteStar}`,
  },
  {
    image: `${Img2}`,
    title: 'Card 2',
    price:"₦12,000 - ₦28,000",
    description: 'Oloture lip palm oil',
    blackstar:`${BlackStar}`,
    whitestar:`${WhiteStar}`,
  },
  {
    image: `${Img3}`,
    title: 'Card 3',
    price:"₦12,000 - ₦28,000",
    description: 'Oloture lip palm oil',
    blackstar:`${BlackStar}`,
    whitestar:`${WhiteStar}`,
  },
  {
    image: `${Img4}`,
    title: 'Card 4',
    price:"₦12,000 - ₦28,000",
    description: 'Oloture lip palm oil',
    blackstar:`${BlackStar}`,
    whitestar:`${WhiteStar}`,
  },
];

const FeatureProduct = () => {
  return (
    <section className='feature-product'>
      <h2>Featured products</h2>
      <p>Our best sellers for this week!</p>
      <div className="carousel">
        <CarouselComponent items={items} />
      </div>
      <div className="center">
      <div className="rectangle-img">
        <div className="feature-1">
          <h4>New Arrival - hand crem</h4>
          <button>Shop</button>
        </div>
        <div className="feature-2">
          <h4>25% off hair & makeup!</h4>
          <p>We’re celebrating our 4th
             year in business! All products under hair and makeup categories are on sales at 25% off!</p>
          <button>Shop</button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default FeatureProduct
