import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import { Private_Routes } from './Private_Routes'
import { Public_Routes } from './Public_Routes'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'

const Router_App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
<Route>
        <Route path="" element={<Private_Routes />}>
          <Route path="/" element={<Home />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
        </Route>
  
        <Route path="" element={<Public_Routes />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>
    )
  )





  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router_App