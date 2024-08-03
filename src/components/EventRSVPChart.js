import React, { useState, useEffect } from "react";
import { getDocs, collection, query, where, Timestamp } from "firebase/firestore";
import { Bar } from "react-chartjs-2";
import { db } from '../firebase-config';

const EventRSVPChart = () => {
  const [rsvpData, setRsvpData] = useState([]);
  const [period, setPeriod] = useState('week'); // Default to week

  useEffect(() => {
    const fetchRSVPData = async () => {
      const now = new Date();
      let startDate;

      switch (period) {
        case 'week':
          startDate = new Date(now.setDate(now.getDate() - 7));
          break;
        case 'month':
          startDate = new Date(now.setMonth(now.getMonth() - 1));
          break;
        case 'year':
          startDate = new Date(now.setFullYear(now.getFullYear() - 1));
          break;
        default:
          startDate = new Date(now.setDate(now.getDate() - 7));
      }

      const rsvpQuery = query(
        collection(db, "eventRSVPs"),
        where("createdAt", ">=", Timestamp.fromDate(startDate)),
        where("attending", "==", true) // Filter for attending RSVPs only
      );

      const rsvpSnapshot = await getDocs(rsvpQuery);
      const rsvpData = rsvpSnapshot.docs.map(doc => ({
        date: doc.data().createdAt.toDate()
      }));

      // Aggregate RSVPs by date
      const aggregatedData = rsvpData.reduce((acc, { date }) => {
        const dateString = date.toLocaleDateString();
        if (!acc[dateString]) {
          acc[dateString] = 0;
        }
        acc[dateString]++;
        return acc;
      }, {});

      setRsvpData(Object.entries(aggregatedData).map(([date, count]) => ({ date, count })));
    };

    fetchRSVPData();
  }, [period]);

  const chartData = {
    labels: rsvpData.map(data => data.date),
    datasets: [{
      label: 'Event RSVPs',
      data: rsvpData.map(data => data.count),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <div>
        <select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default EventRSVPChart;
