import React, { useState, useEffect, useContext, useRef } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getDocs, collection, doc, getDoc, query, orderBy, limit } from "firebase/firestore";
import { db } from './firebase-config';
import EmailPopup from './components/EmailPopup';
import ReportPopup from './components/ReportPopup';
import { useNavigate } from "react-router-dom";
import { TeamContext } from "./TeamContext";
import EmailEngagementChart from "./components/EmailEngagementChart";
import EventRSVPChart from "./components/EventRSVPChart";
import Chart from 'chart.js/auto';
import "./AdminPage.css";

function AdminPage() {
  const navigate = useNavigate();
  const { teamMembers } = useContext(TeamContext);
  const [totalMembers, setTotalMembers] = useState(0);
  const [emailSubscribers, setEmailSubscribers] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isReportPopupOpen, setIsReportPopupOpen] = useState(false);
  const [recentMembers, setRecentMembers] = useState([]);
  const [emailEngagement, setEmailEngagement] = useState([]);
  const [eventRSVPs, setEventRSVPs] = useState([]);
  const engagementChartRef = useRef(null);
  const rsvpChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total members from teamMembers collection
        const teamMembersSnapshot = await getDocs(collection(db, "teamMembers"));
        setTotalMembers(teamMembersSnapshot.size);

        // Fetch email subscribers from subscribers collection
        const subscribersSnapshot = await getDocs(collection(db, "subscribers"));
        setEmailSubscribers(subscribersSnapshot.size);

        // Fetch email count from emailStats document in stats collection
        const emailStatsDoc = await getDoc(doc(db, "stats", "emailStats"));
        if (emailStatsDoc.exists()) {
          setEmailCount(emailStatsDoc.data().emailCount);
        } else {
          console.log("No such document!");
        }

        // Fetch event count from events collection
        const eventsSnapshot = await getDocs(collection(db, "events"));
        setEventCount(eventsSnapshot.size);

        // Fetch email engagement data
        const engagementSnapshot = await getDocs(collection(db, "emailEngagement"));
        setEmailEngagement(engagementSnapshot.docs.map(doc => doc.data()));

        // Fetch event RSVPs data
        const rsvpSnapshot = await getDocs(collection(db, "eventRSVPs"));
        setEventRSVPs(rsvpSnapshot.docs.map(doc => doc.data()));

        // Fetch recent community members from teamMembers collection
        const membersQuery = query(collection(db, "teamMembers"), orderBy("createdAt", "desc"), limit(5));
        const membersSnapshot = await getDocs(membersQuery);
        setRecentMembers(membersSnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const ctx = document.getElementById('summaryPieChart').getContext('2d');
    if (pieChartRef.current) {
      pieChartRef.current.destroy();
    }
    pieChartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Total Members', 'Email Subscribers', 'Emails Sent', 'Events Created'],
        datasets: [{
          label: 'Summary',
          data: [totalMembers, emailSubscribers, emailCount, eventCount],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, [totalMembers, emailSubscribers, emailCount, eventCount]);

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

  const generateReport = () => {
    setIsReportPopupOpen(true);
  };

  const handleCloseReportPopup = () => {
    setIsReportPopupOpen(false);
  };

  return (
    <div className="admin">
      <header className="analytics-header">
        <div className="greeting">
          <p>Hello Admin! <span className="wave-emoji">👋</span></p>
          <p>Welcome to Open Kommunity Admin Page</p>
        </div>
        <div className="team-page-buttons">
          <button className="view-members-button" onClick={handleSendEmail}>
            Send Email
          </button>
          <button className="view-members-button" onClick={handleViewMembers}>
            View Members
          </button>
          <button className="view-members-button" onClick={handleCreateEvent}>
            Create Event
          </button>
          <button className="view-members-button" onClick={generateReport}>
            Generate Report
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
        <div className="charts">
          <div className="chart-box">
            <h3 style={{ textAlign: 'center' }}>Email Engagement</h3>
            <EmailEngagementChart />
          </div>
          <div className="chart-box">
            <h3>Event RSVPs</h3>
            <EventRSVPChart />
          </div>
        </div>
        <div className="summary-box activity-feed">
          <h3 className="feed-title">Summary</h3>
          <canvas id="summaryPieChart"></canvas>
        </div>
        <div className="recent-members activity-feed">
          <h3 className="feed-title">Recent Community Members</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {recentMembers.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <EmailPopup
        isOpen={isEmailPopupOpen}
        onClose={handleClosePopup}
        onSend={handleSendEmailSubmit}
      />
      <ReportPopup
        isOpen={isReportPopupOpen}
        onClose={handleCloseReportPopup}
        data={{
          emailSubscribers,
          openEmail: emailCount, // Assuming openEmail is the same as emailCount
          eventsCreated: eventCount,
          eventRSVPs: eventRSVPs.length, // Assuming eventRSVPs is an array
          totalMembers
        }}
        onGenerateReport={() => console.log('Report generated')}
      />
    </div>
  );
}

export default AdminPage;