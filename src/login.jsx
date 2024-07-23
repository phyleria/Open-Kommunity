import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import "./Homepage.css";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    console.log("Submitting form with data:", formData); // Debugging line

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed in:", userCredential.user); // Debugging line
      localStorage.setItem("userEmail", formData.email); // Save user email to local storage
      navigate("/"); // Navigate to the home page on success
    } catch (error) {
      console.error("Error during sign in:", error); // Debugging line
      alert("Failed to sign in. Please check your credentials."); // Handle errors
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="login-container">
      <h4 className="login-heading">Welcome back!</h4>
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
            autoComplete="username"
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
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="login-btn" disabled={isLoading}>
          Login
        </button>
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
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-message">Signing you in...</div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
