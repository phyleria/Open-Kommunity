import React, { useContext, useEffect, useState } from "react";
import TeamChart from "./components/TeamChart";
import { useNavigate } from "react-router-dom";
import { TeamContext } from "./TeamContext";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import EmailPopup from "./components/EmailPopup";
import "./Homepage.css";
import { getFunctions, httpsCallable } from "firebase/functions";

function AdminPage() {
  const navigate = useNavigate();
  const { teamMembers } = useContext(TeamContext);
  const [totalMembers, setTotalMembers] = useState(0);
  const [emailSubscribers, setEmailSubscribers] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);

  useEffect(() => {
    setTotalMembers(teamMembers.length);
  }, [teamMembers]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      const querySnapshot = await getDocs(collection(db, "subscribers"));
      setEmailSubscribers(querySnapshot.size);
    };

    const fetchEmailCount = async () => {
      const docRef = doc(db, "stats", "emailStats");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEmailCount(docSnap.data().emailCount);
      } else {
        console.log("No such document!");
      }
    };

    const fetchEventCount = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      setEventCount(querySnapshot.size);
    };

    fetchSubscribers();
    fetchEmailCount();
    fetchEventCount();
  }, []);

  const handleCreateEvent = () => {
    navigate("/create-event");
  };

  const handleViewMembers = () => {
    navigate("/members");
  };

  const handleSendEmail = () => {
    setIsEmailPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsEmailPopupOpen(false);
  };

  const handleSendEmailSubmit = async ({ subject, content }) => {
    const functions = getFunctions();
    const sendNewsletter = httpsCallable(functions, "sendNewsletter");
    try {
      const result = await sendNewsletter({ subject, content });
      if (result.data.success) {
        setEmailCount((prevCount) => prevCount + 1);
        console.log("Email sent successfully:", result);
      } else {
        console.error("Error sending email:", result.data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  const incrementEventCount = () => {
    setEventCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="admin">
      <header className="analytics-header">
        <div className="greeting">
          <p>Hello Admin! 👋</p>
          <p>Welcome to Open Kommunity Admin Page</p>
        </div>
        <div className="team-page-buttons">
          <button className="view-members-button" onClick={handleSendEmail}>
            Send Email
          </button>
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
            <p className="stat-value">{totalMembers}</p>
          </div>
          <div className="stat-box">
            <p className="stat-title">EMAIL SUBSCRIBERS</p>
            <p className="stat-value">{emailSubscribers}</p>
          </div>
          <div className="stat-box">
            <p className="stat-title">EMAILS</p>
            <p className="stat-value">{emailCount}</p>
          </div>
          <div className="stat-box">
            <p className="stat-title">EVENTS</p>
            <p className="stat-value">{eventCount}</p>
          </div>
        </div>
        <div className="chart">
          <TeamChart data={teamMembers} />
        </div>
      </main>
      <EmailPopup
        isOpen={isEmailPopupOpen}
        onClose={handleClosePopup}
        onSend={handleSendEmailSubmit}
      />
    </div>
  );
}

export default AdminPage;
