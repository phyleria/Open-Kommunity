import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Homepage.css";
import axios from "axios";

function AdminForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", formData)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/");
        } else {
          navigate("/signup-form");
          alert("You are not registered");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h4 className="login-heading">Welcome back Admin!</h4>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Link to="/login-form" className="signup-login">
            Login
          </Link>
          <div className="divider">
            <hr /> <span>Or Continue With</span> <hr />
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/google-logo.png`}
            alt="Google logo"
            style={{
              width: "24px",
              height: "24px",
              display: "block",
              margin: "20px auto 0",
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default AdminForm;
