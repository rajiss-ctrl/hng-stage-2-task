import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import HomePage from './pages/HomePage'
import CartPreviewPage from './pages/CartPreviewPage'


const AppRoute = () => {
  return (
  
	<Routes>
    <Route path="/" element={
        <Layout>
        <HomePage/>	
        </Layout>
     }/>
     <Route path="/cartpreviewpage" element={<CartPreviewPage/>} />
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
