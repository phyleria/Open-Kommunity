import React, { useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignupForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { email, password })
      .then((result) => {
        console.log(result);
        navigate("/login-form");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <h4 className="signup-heading">Join Our Community</h4>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="white-background"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <p className="black-text">Already have an account?</p>
        <Link to="/login-form" className="login-button">
          <p>Login</p>
        </Link>
      </form>
    </div>
  );
}

export default SignupForm;
