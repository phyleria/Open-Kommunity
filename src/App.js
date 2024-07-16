import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MainEventsPage from "./MainEventsPage";
import SignupForm from "./SignupForm";
import EventRSVPForm from "./EventRSVPForm";
import LoginForm from "./login";
import AboutUsPage from "./About";
import CreateEventPage from "./CreateEvent";
import TeamPage from "./TeamPage";
import MemberAnalytics from "./MemberAnalytics";
import TeamTable from "./components/TeamTable";
import AdminLogin from "./AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main-events-page" element={<MainEventsPage />} />
        <Route path="/signup-form" element={<SignupForm />} />
        <Route path="/event-rsvp-form" element={<EventRSVPForm />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/analytics" element={<MemberAnalytics />} />
        <Route path="/team-table" element={<TeamTable />} />
        <Route path="/admin-form" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
