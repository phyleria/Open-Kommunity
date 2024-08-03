import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase-config";
import "./Homepage.css";

const SubscriptionBox = ({ setEmailSubscribers }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const handleSubscribe = async () => {
    if (email) {
      try {
        await addDoc(collection(db, "subscribers"), {
          email: email,
          createdAt: Timestamp.now(),
        });
        alert("Subscribed successfully!");
        setEmail("");
        setEmailSubscribers((prev) => prev + 1);
        navigate("/");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="newsletter">
      <div className="subscription-content">
        <button className="close-button" onClick={handleClose}>
          ✖
        </button>
        <h2>Sign up</h2>
        <p>Subscribe to our email newsletter</p>
        <div className="newsletter-container">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
          />
          <button className="subscribe-button" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;