import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
        <h2>
            <NavLink to="/">Home</NavLink>&ensp;
            <NavLink to="/about">About</NavLink>&ensp;
            <NavLink to="/products">Products</NavLink>&ensp;
            <NavLink to="/contact">Contact</NavLink>&ensp;
            <NavLink to="/users">Users</NavLink>&ensp;
        </h2>
    </div>
  )
}

export default Navbar