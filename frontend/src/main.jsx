import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';

// const router = createBrowserRouter([{
//   path: "/",
//   element: <App />,
//   children: [
//     {
//       path: "",
//       element: <HomePage/>
//     },{
//       path: "product",
//       element: <ProductPage/>
//     }
//   ]
// }]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='' element={<HomePage />}/>
      <Route path='product' element={<ProductPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
