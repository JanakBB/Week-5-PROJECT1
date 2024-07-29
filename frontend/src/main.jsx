import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import SignIn from './pages/SignIn.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='' element={<HomePage />}/>
      <Route path='product/:id' element={<ProductPage />} />
      <Route path="cart" element={<CartPage/>} />
      <Route path='signin' element={<SignIn />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
