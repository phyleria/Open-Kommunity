import React, { useState, useEffect } from "react";
import "./MainEventsPage.css"; // Import CSS file for styling

function MainEventsPage() {
  const [events, setEvents] = useState([]); // State to store events
  const maxEventsToDisplay = 3;
  let fetchedEvents = []; // Control the number of events displayed horizontally

  // Function to fetch or retrieve events (replace with your logic)
  const fetchEvents = async () => {
    // ... your event data fetching logic (e.g., API call)
    setEvents(fetchedEvents); // Update events state
  };

  useEffect(() => {
    fetchEvents(); // Fetch events on component mount
  }, []);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= new Date()
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) < new Date()
  );

  return (
    <div className="main-events-page">
      <header>{/* Your header content here */}</header>

      <main>
        <section className="upcoming-events-section">
          <h2>Upcoming Events</h2>
          <div className="event-cards">
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Monthly Community Meetup</h4>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Guest Speaker Session</h4>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Open Talk Baraza</h4>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
          </div>

          <a href="#view-more" className="view-more-button">
            View More Upcoming Events
          </a>
        </section>

        <section className="past-events-section">
          <h2>Past Events</h2>
          <div className="event-cards">
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Monthly Community Meetup</h4>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Guest Speaker Session</h4>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Open Talk Baraza</h4>
                <p>Date: 2024-01-25</p>
                <p>Time: 7:00 PM</p>
              </div>
            </div>
          </div>

          {pastEvents.length > maxEventsToDisplay && (
            <a href="#view-more" className="view-more-button">
              View More Past Events
            </a>
          )}
        </section>
      </main>

      <footer>{/* Your footer content here */}</footer>
    </div>
  );
}

export default MainEventsPage;
