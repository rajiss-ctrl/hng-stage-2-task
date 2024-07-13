import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom";
import './global.css'
import AppRoute from './AppRoute';
import { CartProvider } from './context/ProductContext';


// API_KEY = c215be6b62ae49e58b299803ba1b180520240712134816085034
// APP_ID =LS345VNCKDGPKGY
//organisation id= 07b4ca15b24e480e9e29d0150089bde0
// curl -X GET "https://api.timbu.cloud/products?organization_id=07b4ca15b24e480e9e29d0150089bde0&reverse_sort=false&page=2&size=10&APP_ID=LS345VNCKDGPKGY&API_KEY=c215be6b62ae49e58b299803ba1b180520240712134816085034" 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CartProvider>
    <Router>
      <AppRoute />
    </Router>
  </CartProvider>
  </React.StrictMode>,
)
