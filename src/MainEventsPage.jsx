import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { faCalendarAlt, faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "./firebase-config";
import { collection, query, getDocs } from "firebase/firestore";
import "./Homepage.css";

function MainEventsPage() {
  const [events, setEvents] = useState([]);

  const hardcodedEvents = [
    {
      id: "1",
      title: "Monthly Community Meetup",
      date: "July 21, 2024",
      time: "7:00 PM",
      imageUrl:
        "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXR1cCUyMGFmcmljYW58ZW58MHx8MHx8fDA%3D",
      link: "/event-rsvp-form",
    },
    {
      id: "2",
      title: "Guest Speaker Session",
      date: "July 21, 2024",
      time: "7:00 PM",
      imageUrl:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjB1bml2ZXJzaXR5JTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D",
      link: "/event-rsvp-form",
    },
    {
      id: "3",
      title: "Open Talk Baraza",
      date: "July 21, 2024",
      time: "7:00 PM",
      imageUrl:
        "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",
      link: "/event-rsvp-form",
    },
  ];

  const fetchEvents = async () => {
    const q = query(collection(db, "events"));
    const querySnapshot = await getDocs(q);
    const fetchedEvents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEvents([...hardcodedEvents, ...fetchedEvents]);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <img src={event.imageUrl} alt={event.title} />
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {event.date}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faClock} /> {event.time}
                  </p>
                  <a href="./event-rsvp-form" className="register-button">
                    RSVP
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="banner-section-2" color="white">
          <div className="banner-text">
            <h4>Past Events</h4>
          </div>
        </section> */}

        {/* <section className="past-events-section">
          <div className="event-cards">
            {events.map((event) => (
              <div className="event-card" key={event.id}>
                <img src={event.imageUrl} alt={event.title} />
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p>
                    <FontAwesomeIcon icon={faCalendarAlt} /> {event.date}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faClock} /> {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a href="#view-more" className="view-more">
            View More Past Events
          </a>
        </section> */}
      </main>

      <footer></footer>
    </div>
  );
}

export default MainEventsPage;
