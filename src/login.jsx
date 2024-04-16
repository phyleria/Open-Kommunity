import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory hook for navigation
import "./Homepage.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        formData
      ); // Corrected endpoint URL
      console.log(response.data); // Log response data

      // Check response data and navigate accordingly
      if (response.data === "exist") {
        history.push("/homepage"); // Redirect to homepage if user exists
      } else if (response.data === "does not exist") {
        alert("You are not signed in"); // Show alert if user does not exist
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Wrong details"); // Show alert for any error
    }
  };

  return (
    <div className="login-container">
      <p className="login-heading">Welcome back! Log in to your account</p>
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
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
