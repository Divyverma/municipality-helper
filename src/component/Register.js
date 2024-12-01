import React from 'react'
import { Link } from 'react-router'
import '../styles/register.css'

const Register = () => {
  return (
    <div className='reg-container'>
      <div className='reg-design-part'>
      {/* design */}
      <h1>Welcome!</h1>
      <p>Get started</p>
    </div>
    <div className='reg-login-form'>
      <h2 className='reg-heading'>Register here</h2>
      <div className='reg-input-fields'>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='email'/>
          <input type='password' placeholder='password' />
          
          <div className='selection'>
          <label for="lang">Register as:</label>
          <select>
            <option value="select option" selected>select option</option>
            <option value="Citizens">Citizen</option>
            <option value="Municipal Authorities">Municipal Authorities</option>
          </select>
          </div>
      </div>
      <button>Register</button>
      <p>Allready have account? <Link to="/login">Login Here</Link></p>
    </div>
  </div>
  )
}

export default Register
