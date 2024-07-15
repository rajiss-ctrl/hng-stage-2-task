import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import CartPreviewPage from './pages/CartPreviewPage'
import CheckoutForm from './pages/CheckoutForm'
import ProductDetail from './pages/ProductDetail'
import OrderConfirmation from './components/OrderConfirmation'
import AllProducts from './pages/AllProducts'



const AppRoute = () => {
  return (
  
	<Routes>
    <Route path="/" element={
        <Layout>
        <HomePage/>	
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
