import React from 'react'
import '../styles/navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      
      <div className='links'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/reportproblem'>Report Problem</Link></li>
            <li><Link to='/track'>Track issue</Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>
      </div>

      <div>
        <h3>User Profile</h3>
      </div>
    </div>
  )
}

export default Navbar
