import FeatureProduct from "../components/FeatureProduct"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import './HomePage.css';

const HomePage = () => {
  return (
    <main className=''>
      <div className="cta-remark">
       <p> Free deliveries on all orders within Nigeria</p>
      </div>
        <Hero/>
        <FeatureProduct/>
        <Footer/>
    </main>
  )
}

export default HomePage
