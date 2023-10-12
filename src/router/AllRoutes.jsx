import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Navbar from '../Layout/Navbar';
import Product from '../pages/products/Product';
import Cart from '../pages/logged/Cart'

function AllRoutes() {
  return (
   <>
   <Navbar/>
   <Routes> 
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/register' element={<Register/>}></Route>
     <Route path='/products' element={<Product/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
   </Routes>
   </>
)}

export default AllRoutes