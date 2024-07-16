import React from "react";
import TeamChart from "./components/TeamChart";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const teamMembers = [
  {
    name: "Bagus Fikri",
    email: "bagusfikri@gmail.com",
    role: "Admin",
    status: "Enabled",
    lastLogin: "Jul 13, 2024 07:31 PM",
  },
  {
    name: "Phylis Atieno",
    email: "atienophyllis032@gmail.com",
    role: "Member",
    status: "Disabled",
    lastLogin: "Jul 13, 2024 05:25 PM",
  },
];

function MemberAnalytics() {
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate("/create-event");
  };
  const handleViewMembers = () => {
    navigate("/team");
  };
  return (
    <div className="analytics">
      <header className="analytics-header">
        <div className="greeting">
          <p>Hello Phylis! 👋</p>
          <p>Welcome to Open Kommunity Admin Page</p>
        </div>
        <div className="team-page-buttons">
          <button className="view-members-button" onClick={handleViewMembers}>
            View Members
          </button>
          <button className="create-event-button" onClick={handleCreateEvent}>
            Create Event
          </button>
        </div>
      </header>
      <main>
        <div className="stats">
          <div className="stat-box">
            <p className="stat-title">TOTAL MEMBERS</p>
            <p className="stat-value">2</p>
          </div>
          <div className="stat-box">
            <p className="stat-title">EMAIL SUBSCRIBERS</p>
            <p className="stat-value">0</p>
          </div>
          <div className="stat-box">
            <p className="stat-title">EMAILS</p>
            <p className="stat-value">0</p>
          </div>
          <div className="stat-box">
            <p className="stat-title">EVENTS</p>
            <p className="stat-value">0</p>
          </div>
        </div>
        <div className="chart">
          <TeamChart data={teamMembers} />
        </div>
      </main>
    </div>
  );
}

export default MemberAnalytics;
