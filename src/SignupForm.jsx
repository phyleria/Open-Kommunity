import React, { useState } from "react";
import "./Homepage.css";
import axios from "axios";

function App() {
  const[email, setEmail] = useState()
  const [password, setPassword] = useState ()

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="signup-container">
      <p className="signup-heading">Join Our Open Community</p>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) =>setEmail(e.target.value)}
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) =>setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default App;