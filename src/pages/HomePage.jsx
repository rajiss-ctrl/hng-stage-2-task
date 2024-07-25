import FeatureProduct from "../components/FeatureProduct"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import './HomePage.css';

const HomePage = ({filteredProducts,handleSearch}) => {
  return (
    <main className=''>
      <div className="cta-remark">
       <p> Free deliveries on all orders within Nigeria</p>
      </div>
        <Hero handleSearch={handleSearch}/>
        <FeatureProduct filteredProducts={filteredProducts}/>
        <Footer/>
    </main>
  )
}

export default HomePage
