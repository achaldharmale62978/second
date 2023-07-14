import React from 'react'
import { NavLink,  Outlet } from 'react-router-dom'
// import {   Outlet, useNavigate } from 'react-router-dom'

const Contact = () => {
    // const Navigate=useNavigate()

  return (
    <div>
        <h2>i am Contact comp.....</h2>
        <h2>
            <NavLink to="contactfirst">Contact firts</NavLink>&ensp;
            <NavLink to="contactsecond">Contact second</NavLink>&ensp;
            <NavLink to="contactthird">Contact third</NavLink>&ensp;
            {/* <button onClick={()=>Navigate('contactfirst')}>Contact First</button> <br/>
            <button onClick={()=>Navigate('contactsecond')}>Contact Second</button> <br/>
            <button onClick={()=>Navigate('contactthird')}>Contact Third</button> <br/> */}
            <Outlet/>
        </h2>
    </div>
  )
}

export default Contact