import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import CartPreviewPage from './pages/CartPreviewPage'
import CheckoutForm from './pages/CheckoutForm'
import ProductDetail from './pages/ProductDetail'
import OrderConfirmation from './components/OrderConfirmation'
import AllProducts from './pages/AllProducts'
import { useState,useEffect } from 'react'
import { useCart } from './context/ProductContext'



const AppRoute = () => {
  const { state: { products }, dispatch } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (products.length === 0) {
      const fetchData = async () => {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;
        const APP_ID = import.meta.env.VITE_APP_ID;
        const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;

        try {
          const response = await fetch(`${API_BASE_URL}/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=1&size=10&Appid=${APP_ID}&Apikey=${API_KEY}`);
          const data = await response.json();
          if (data.items && Array.isArray(data.items)) {
            dispatch({ type: 'SET_PRODUCTS', products: data.items });
          }
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchData();
    } else {
      setFilteredProducts(products);
    }
  }, [products, dispatch]);

  const handleSearch = (query) => {
    const filtered = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredProducts(filtered);
  };
  return (
  
	<Routes>
    <Route path="/" element={
        <Layout>
        <HomePage onSearch={handleSearch} filteredProducts={filteredProducts}/>	
        </Layout>
     }/>
     <Route path="/order-confirmation" element={<OrderConfirmation/>} />
     <Route path="/all-products" element={<AllProducts/>} />
     <Route path="/product/:productId" element={<ProductDetail/>} />
     <Route path="/cart-preview-page" element={<CartPreviewPage/>} />
     <Route path="/checkout-form" element={<CheckoutForm/>} />
 {/* <Route path="/auth-callback-page" element={<AuthCallbackPage/>} /> */}
 {/* <Route element={<ProtectedRoute/>}>
   <Route pathh="/user-profile" element={
     <Layout>
       <UserProfilePage/>
     </Layout>} />
 </Route> */}
 {/* <Route pathh="*" element={<Navigate to="/"/>} />	 */}
 </Routes>
  )
}

export default AppRoute
