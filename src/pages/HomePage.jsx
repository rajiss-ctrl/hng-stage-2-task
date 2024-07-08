import FeatureProduct from "../components/FeatureProduct"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

const HomePage = () => {
  return (
    <main className=''>
      <div className="cta-remark">
       <p> Free deliveries on all orders within Nigeria</p>
      </div>
        <Hero/>
        <FeatureProduct/>
        <Footer/>
      {/* <AboutUs/>
      <ExploreResort/>
      <Testimony/>
      <OurStories/> */}
    </main>
  )
}

export default HomePage
