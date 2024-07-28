import React, { useState, useContext } from "react";
import "./Homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import { TeamContext } from "./TeamContext";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { addTeamMember } = useContext(TeamContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const name = email.split("@")[0].split(".")[0];

      addTeamMember({
        name,
        email,
        role: "Member",
        status: "Enabled",
        lastLogin: new Date().toLocaleString(),
      });

      navigate("/login-form");
    } catch (error) {
      console.error(error);
    }
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
  );
}

export default SignupForm;
