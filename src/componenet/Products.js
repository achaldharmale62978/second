import React from 'react'
// import { NavLink,  Outlet } from 'react-router-dom'
import {   Outlet, useNavigate } from 'react-router-dom'

const Products = () => {
    const Navigate=useNavigate()

  return (
    <div>
        <h2>i am Products comp.....</h2>
        <h3>
            {/* <NavLink to="productfirst">Productfirst</NavLink>&ensp;
            <NavLink to="productsecond">Productsecond</NavLink>&ensp;
            <NavLink to="productthird">Productthird</NavLink>&ensp;
            <NavLink to="Productforth">Productforth</NavLink>&ensp; */}

            <button onClick={()=>Navigate('productfirst')}>Product first</button><br/>
            <button onClick={()=>Navigate('productsecond')}>Product second</button><br/>
            <button onClick={()=>Navigate('productthird')}>Product third</button><br/>

            <Outlet/>
        </h3>
    </div>
  )
}

export default Products