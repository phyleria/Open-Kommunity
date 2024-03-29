import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MainEventsPage from "./MainEventsPage";
import SignupForm from "./SignupForm";
import EventRSVPForm from "./EventRSVPForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main-events-page" element={<MainEventsPage />} />
        <Route path="/signup-form" element={<SignupForm />} />
        <Route path="/event-rsvp-form" element={<EventRSVPForm />} />
      </Routes>
    </Router>
  );
}

export default App;
