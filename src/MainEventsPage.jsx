import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-scroll";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainEventsPage() {
  const [events, setEvents] = useState([]);
  const maxEventsToDisplay = 3;
  let fetchedEvents = [];

  const fetchEvents = async () => {
    setEvents(fetchedEvents);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= new Date()
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) < new Date()
  );

  return (
    <div className="main-events-page" style={{ backgroundColor: "black" }}>
      <header className="header">
        <nav>
          <div className="nav-links">
            <ul>
              <li>
                <a href="/" smooth={true} duration={500}>
                  Home
                </a>
              </li>
              <li>
                <Link to="about-us-section" smooth={true} duration={500}>
                  About Us
                </Link>
              </li>
              <li>
                <a href="/main-events-page" smooth={true} duration={500}>
                  Events
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="banner-section" color="white">
        <div className="banner-text">
          <h4>Upcoming Events</h4>
        </div>
      </section>

      <main>
        <section className="upcoming-events-section">
          <div className="event-cards">
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Monthly Community Meetup</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
                <a href="/event-rsvp-form" className="register-button">
                  RSVP
                </a>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Guest Speaker Session</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
                <a href="/event-rsvp-form" className="register-button">
                  RSVP
                </a>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Open Talk Baraza</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
                <a href="/event-rsvp-form" className="register-button">
                  RSVP
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="banner-section-2" color="white">
          <div className="banner-text">
            <h4>Past Events</h4>
          </div>
        </section>

        <section className="past-events-section">
          <div className="event-cards">
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Monthly Community Meetup</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Monthly Community Meetup</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Monthly Community Meetup</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Monthly Community Meetup</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Guest Speaker Session</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
              </div>
            </div>
            <div className="event-card">
              <img
                src="https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="event-details">
                <h4>Open Talk Baraza</h4>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> July 21, 2024
                </p>
                <p>
                  <FontAwesomeIcon icon={faClock} /> 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* {pastEvents.length > maxEventsToDisplay && ( */}
          <a href="#view-more" className="view-more">
            View More Past Events
          </a>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default MainEventsPage;
