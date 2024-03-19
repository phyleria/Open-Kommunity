import React, { useState } from "react";
import "./Homepage.css";

const EventRSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, attending });
  };

  return (
    <div className="event-rsvp-form">
      <style>{`
        body {
          background-color: #000000;
        }
      `}</style>
      <p>RSVP for the Event</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
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
    </div>
  );
};

export default EventRSVPForm;
