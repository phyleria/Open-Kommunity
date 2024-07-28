import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory hook for navigation
import { db } from "./firebase-config"; // Import Firestore
import { collection, addDoc } from "firebase/firestore";
import "./Homepage.css";

const EventRSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState(false);
  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "eventRSVPs"), {
        name,
        email,
        attending,
      });
      setRegistered(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    if (registered) {
      const timeoutId = setTimeout(() => {
        navigate("/main-events-page");
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [registered, navigate]);

  return (
    <div className="event-rsvp-form">
      <style>{`
        body {
          background-color: #000000;
        }
      `}</style>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={attending}
              onChange={(e) => setAttending(e.target.checked)}
            />
            Are you attending?
          </label>
        </div>
        <button type="submit">Submit RSVP</button>
      </form>
      {registered && <h6>Congratulations, you are successfully registered!</h6>}
    </div>
  );
};

export default EventRSVPForm;
