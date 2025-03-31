import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [post, setPost] = useState("");

  const submitForm = async () => {

    const response = await fetch("http://localhost:5000/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({name, email, pass, post}),
    })
    const data = await response.json()
    if(response.ok){
      alert(data.message)
      navigate('/login')
    }else{
      alert(data.message)
    }
  };

  return (
    <div className="reg-container">
      <div className="reg-design-part">
        {/* design */}
        <h1>Welcome!</h1>
        <p>Get started</p>
      </div>
      <div className="reg-login-form">
        <h2 className="reg-heading">Register here</h2>
        <div className="reg-input-fields">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            onChange={(e) => setpass(e.target.value)}
          />

          <div className="selection">
            <label for="lang">Register as:</label>
            <select onChange={(e) => setPost(e.target.value)}>
              <option value="select option" defaultValue={"Select Option"}>
                select option
              </option>
              <option value="Citizen">Citizen</option>
              <option value="Municipal Authority">
                Municipal Authority
              </option>
            </select>
          </div>
        </div>
        <button onClick={submitForm}>Register</button>
        <p>
          Allready have account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
