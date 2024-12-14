import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <NavLink>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/"><li>Contact</li></Link>
            <Link to="/"><li>Register</li></Link>
        </NavLink>
    </div>
  )
}

export default Navbar