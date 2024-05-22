import React from "react";
import "./Homepage.css";
import { Link } from "react-scroll";

function AboutUsPage() {
  return (
    <div className="about-us">
      <header className="hero-header">
        <nav>
          <div className="nav-links">
            <ul>
              <li>
                <a href="./" smooth={true} duration={500}>
                  Home
                </a>
              </li>
              <li>
                <Link to="about-content1" smooth={true} duration={500}>
                  Our story
                </Link>
              </li>
              <li>
                <Link to="featured-events-section" smooth={true} duration={500}>
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <div className="float-animation">
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "20px ",
                marginLeft: "",
              }}
            >
              Connect.
            </h1>
            <h1 style={{ fontSize: "5rem", color: "#fe9f29" }}>Build.</h1>
            <h1 style={{ fontSize: "8rem", marginLeft: "" }}>Grow.</h1>
          </div>
        </div>
      </section>

      <section className="about-us-section1">
        <div className="about-container1">
          <div className="about-heading1">
            <h2>OUR STORY</h2>
          </div>
          <div className="about-content1">
            <h5>
              Open Kommunity was born out of a simple idea: that when people
              come together, they can create extraordinary things. It all
              started in a small town, where a group of friends decided to
              create a platform to share their ideas and collaborate on
              projects. They believed that by working together, they could make
              a positive impact on their community.
            </h5>
            <h5>
              The first project was a success, and word quickly spread. More
              people joined, bringing their own unique skills and perspectives.
              The community grew, and so did the scope of the projects. From
              building local parks to developing open-source software, Open
              Kommunity became a place where anyone could contribute and make a
              difference.
            </h5>
            <h5>
              Today, Open Kommunity is more than just a group of friends. It's a
              global network of innovators, thinkers, and doers who are
              committed to building a better world. We've grown, but our mission
              remains the same: to bring people together, to collaborate, and to
              create positive change in our communities.
            </h5>
            <h5>Join us as we continue to grow, one project at a time.</h5>
          </div>
        </div>
      </section>

      <section className="featured-events-section">
        <h3>Meet Our Team</h3>
        <div className="event-cards">
          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1611432579699-484f7990b127?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="event-details">
              <h4>Olivia D.</h4>
            </div>
          </div>
          <div className="event-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="event-details">
              <h4>Sophia M.</h4>
            </div>
          </div>
          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww"
              alt=""
            />
            <div className="event-details">
              <h4>Emily J.</h4>
            </div>
          </div>
          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1547037579-f0fc020ac3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww"
              alt=""
            />
            <div className="event-details">
              <h4>Ethan B.</h4>
            </div>
          </div>
          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxhZnJpY2FuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
            <div className="event-details">
              <h4>Michael S.</h4>
            </div>
          </div>
          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1536747582722-23aec5cf28d4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="event-details">
              <h4>Noah G.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
