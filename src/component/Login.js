import React from "react";
import '../styles/login.css'
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="log-container">
      <div className="log-login-form">
        <h2 className="log-heading">Login here</h2>
        <div className="log-input-fields">
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button>Login</button>
        <p>
          Don't have account? <Link to="/register">Register Here</Link>
        </p>
      </div>

      <div className="log-design-part">
        {/* design */}
        <h1>Welcome Back!</h1>
        <p>Get started</p>
      </div>
    </div>
  );
};

export default Login;
