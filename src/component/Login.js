import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='container'>
      <div className='login-form'>
        <h2 className='heading'>Welcome Back!</h2>
        <div className='input-fields'>
            <input type='text' placeholder='email'/>
            <input type='password' placeholder='password' />
        </div>
        <button>Login</button>
        <p>Don't have account? <Link to="/register">Register</Link></p>
      </div>
      <div className='design-part'>
        {/* design */}
        <h1>Welcome back</h1>
        <p>Get started Again</p>
      </div>
    </div>
  )
}

export default Login
