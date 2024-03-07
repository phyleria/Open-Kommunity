import React from "react";
import "./Homepage.css"; // Import CSS file for styling

function MainEventsPage() {
  return (
    <div className="main-events-page">
      <header>{/* Your header content here */}</header>

      <main>
        <section className="featured-events-section">
          <h3>Featured Events</h3>
          <div className="event-cards">
            {/* Featured event cards */}
            <div className="event-card">
              <img src="https://example.com/image1.jpg" alt="Event 1" />
              <div className="event-details">
                <h4>Event Name 1</h4>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
            {/* Add more event cards */}
          </div>
          <a href="#view-more" className="view-more-button">
            View More Events
          </a>
        </section>

        <section id="upcoming-events" className="upcoming-events-section">
          <h3>Upcoming Events</h3>
          <div className="event-cards">
            {/* Upcoming event cards */}
            <div className="event-card">
              <img src="https://example.com/image2.jpg" alt="Event 2" />
              <div className="event-details">
                <h4>Event Name 2</h4>
                <p>Date: 2024-02-15</p>
                <p>Time: 6:30 PM</p>
              </div>
            </div>
            {/* Add more event cards */}
          </div>
          <a href="#view-more" className="view-more-button">
            View More Upcoming Events
          </a>
        </section>
      </main>

      <footer>{/* Your footer content here */}</footer>
    </div>
  );
}

export default MainEventsPage;
