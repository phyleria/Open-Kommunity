import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MainEventsPage from "./MainEventsPage";
import SignupForm from "./SignupForm";
import EventRSVPForm from "./EventRSVPForm";
import LoginForm from "./login";
import AboutUsPage from "./About";
import CreateEventPage from "./CreateEvent";
import MembersPage from "./MembersPage";
import AdminPage from "./AdminPage";
import TeamTable from "./components/TeamTable";
import { TeamProvider } from "./TeamContext";
import SubscriptionBox from "./SubscriptionBox";
import EmailPopup from "./components/EmailPopup";

function App() {
  const [eventCount, setEventCount] = useState(0);

  const incrementEventCount = () => {
    setEventCount((prevCount) => prevCount + 1);
  };

  return (
    <TeamProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main-events-page" element={<MainEventsPage />} />
          <Route path="/signup-form" element={<SignupForm />} />
          <Route path="/event-rsvp-form" element={<EventRSVPForm />} />
          <Route path="/login-form" element={<LoginForm />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route
            path="/create-event"
            element={
              <CreateEventWrapper incrementEventCount={incrementEventCount} />
            }
          />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/team-table" element={<TeamTable />} />
          <Route path="/newsletter" element={<SubscriptionBox />} />
          <Route path="/send-email" element={<EmailPopup isOpen={true} />} />
        </Routes>
      </Router>
    </TeamProvider>
  );
}

const CreateEventWrapper = ({ incrementEventCount }) => {
  return <CreateEventPage incrementEventCount={incrementEventCount} />;
};

export default App;
