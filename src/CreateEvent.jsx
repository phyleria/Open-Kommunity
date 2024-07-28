import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "./firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Homepage.css";

function CreateEventPage({ incrementEventCount }) {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    locationType: "Virtual",
    link: "",
    imageUrl: "",
  });

  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `events/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, "events"), {
        ...event,
        imageUrl,
      });

      setIsModalOpen(true);
      incrementEventCount();
    } catch (error) {
      console.error("Error adding event: ", error);
      setError("Failed to create event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate("/admin");
    }, 1000);
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
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
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
              required
            />
          </div>
          <div>
            <label>End Time</label>
            <input
              type="time"
              name="endTime"
              value={event.endTime}
              onChange={handleChange}
              required
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
            required
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
                required
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
                required
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
              required
            />
          </div>
        )}
        <div className="form-group">
          <label>Event Image</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="event-buttons">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/admin")}
          >
            Cancel
          </button>
        </div>
      </form>

      {error && <p className="error-message">{error}</p>}

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
