import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import "./Homepage.css";

function CreateEventPage() {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    guests: "",
    locationType: "Virtual",
    link: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    console.log("Event Created:", event);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate("/analytics");
    }, 3000);
  };

  return (
    <div className="create-event">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group time-group">
          <div>
            <label>Start Time</label>
            <input
              type="time"
              name="startTime"
              value={event.startTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>End Time</label>
            <input
              type="time"
              name="endTime"
              value={event.endTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={event.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Guests</label>
          <input
            type="email"
            name="guests"
            value={event.guests}
            onChange={handleChange}
          />
        </div>
        <div className="form-group location-group">
          <label>Location</label>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="locationType"
                value="Virtual"
                checked={event.locationType === "Virtual"}
                onChange={handleChange}
              />{" "}
              Virtual
            </label>
            <label>
              <input
                type="radio"
                name="locationType"
                value="Physical"
                checked={event.locationType === "Physical"}
                onChange={handleChange}
              />{" "}
              Physical
            </label>
          </div>
        </div>
        {event.locationType === "Virtual" && (
          <div className="form-group">
            <label>Link</label>
            <input
              type="text"
              name="link"
              value={event.link}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="event-buttons">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Event Created Successfully!</h2>
            <p>Your event has been created.</p>
            <button onClick={closeModal} className="btn btn-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateEventPage;
