import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Users from './Users'
import Error from './Error'
import Navbar from './Navbar'
import Productfirst from './Productfirst'
import Productsecond from './Productsecond'
import Productthird from './Productthird'
import Productforth from './Productforth'
import UserDetails from './UserDetails'

const Myapp = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/products' element={<Products/>}>
                <Route path='/products/productfirst' element={<Productfirst/>}></Route>
                <Route path='/products/productsecond' element={<Productsecond/>}></Route>
                <Route path='/products/productthird' element={<Productthird/>}></Route>
                <Route path='/products/productforth' element={<Productforth/>}></Route>
            </Route>
            <Route path='/contact' element={<Contact/>}>
                <Route path='/contact/:name' element={<UserDetails/>}></Route>
            </Route>
            <Route path='/users' element={<Users/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
    </div>
  )
}

export default Myapp