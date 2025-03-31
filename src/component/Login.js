import React, { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitLogin = async () => {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, pass}),
    });


    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      localStorage.setItem("authToken", data.post);
      navigate("/");
    } else {
      alert(data.message)
    }
  };

  return (
    <div className="log-container">
      <div className="log-login-form">
        <h2 className="log-heading">Login here</h2>
        <div className="log-input-fields">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button onClick={submitLogin}>Login</button>
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
