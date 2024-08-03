import React, { useEffect, useState } from "react";
import { db } from "../firebase-config"; 
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const EmailEngagementChart = () => {
  const [emailsSent, setEmailsSent] = useState(0);
  const [emailOpens, setEmailOpens] = useState(0);
  const [emailSubscribers, setEmailSubscribers] = useState(0);

  useEffect(() => {
    const fetchEmailEngagementData = async () => {
      try {
        // Fetch email subscribers count
        const subscribersSnapshot = await getDocs(collection(db, "subscribers"));
        setEmailSubscribers(subscribersSnapshot.size);

        // Fetch email count from emailStats document
        const emailStatsDoc = await getDoc(doc(db, "stats", "emailStats"));
        if (emailStatsDoc.exists()) {
          setEmailsSent(emailStatsDoc.data().emailCount || 0);
        } else {
          console.log("No such document!");
        }

        const engagementSnapshot = await getDocs(collection(db, "emailEngagement"));
        let totalEmailOpens = 0;

        engagementSnapshot.forEach((document) => {
          const data = document.data();
          totalEmailOpens += data.opened || 0;
        });

        setEmailOpens(totalEmailOpens);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEmailEngagementData();

    const interval = setInterval(fetchEmailEngagementData, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: ["Emails Sent", "Open Emails", "Email Subscribers"],
    datasets: [
      {
        label: "Email Engagement",
        data: [emailsSent, emailOpens, emailSubscribers],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-box">
      <Bar data={data} options={options} />
    </div>
  );
};

export default EmailEngagementChart;