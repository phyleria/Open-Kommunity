import React from "react";
import "./Homepage.css"; // Import your CSS file for styling

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About Us">About Us</a>
            </li>
            <li>
              <a href="#Events">Events</a>
            </li>
            <li>
              <button className="join-us-button">Join Us</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-image-container">
            {/* <img
              src="path/to/your/background-image.jpg"
              alt="student community gthering"
            /> */}
            <div className="hero-text">
              <h1>Find Your Tribe.Find Your Purpose.</h1>
            </div>
          </div>
        </section>

        <section className="about-us-section">
          <h2>About Us</h2>
          <p>sguehfgehifheugfehiehfuheiheijfi</p>
        </section>

        <section className="featured-events-section">
          <h2>Featured Events</h2>
          <div className="event-cards">
            {/* Add individual event cards here */}
            <div className="event-card">
              <img src="path/to/event1-image.jpg" alt="" />
              <div className="event-details">
                <h3>Event Name 1</h3>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
            {/* Add more event cards as needed */}
          </div>
        </section>
      </main>

      <footer>{/* Add footer content here */}</footer>
    </div>
  );
}

export default HomePage;
