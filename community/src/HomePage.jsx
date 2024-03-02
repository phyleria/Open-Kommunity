import React from "react";
import "./Homepage.css"; // Import your CSS file for styling

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero-header">
        <nav>
          <div className="nav-links">
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
            </ul>
            <button className="join-us-button">Join Our Club</button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-text">
            <div className="float-animation">
              <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                Find Your Tribe
              </h1>
              <h2 style={{ fontSize: "6rem", marginTop: "0" }}>
                Find Your Purpose.
              </h2>
              <button className="join-button">Join Our Club</button>
            </div>
          </div>
        </section>

        <section className="about-us-section">
          <div className="about-container">
            <div className="about-heading">
              <h2>About Us</h2>
            </div>
            <div className="about-content">
              <h5>
                Open Kommunity brings people together to share ideas and work on
                projects that make a difference.
                <br /> We believe that when we collaborate, we can create
                positive changes in our community.
                <br /> Join us as we build a better world, one project at a
                time.
              </h5>
            </div>
          </div>
        </section>

        <section className="featured-events-section">
          <h3>Featured Events</h3>
          <div className="event-cards">
            {/* Add individual event cards here */}
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
            {/* Add more event cards as needed */}
          </div>
        </section>
        <section className="featured-stats-section">
          <div className="stats-box">+500 members</div>
          <div className="stats-box">+26 partners</div>
          <div className="stats-box">+20 events</div>
          <div className="stats-box">+100 impacted</div>
        </section>
      </main>

      <footer>
        <footer>
          <div class="footer-container">
            <div class="footer-section">
              <h4>About Us</h4>
              <p>Information about your company or organization.</p>
            </div>
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Join us</a>
                </li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Contact Us</h4>
              <p>Email: info@open.com</p>
              <p>Phone: +254 738 2782 28</p>
            </div>
            <div class="footer-section">
              <h4>Follow Us</h4>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </footer>
    </div>
  );
}

export default HomePage;
