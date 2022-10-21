import React from 'react'
import {Link, Outlet } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav>  
        <Link to='/Cities'>Cities</Link>
        <Link to='/Drive'>Drive</Link>
        <Link to='/Blog'>Blog</Link>
        <Link to='/Partner'>Partner</Link>
        <Link to="/Help">Help</Link>
        <Outlet/>
    </nav>
    </div>
  )
}
