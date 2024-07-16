import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TeamChart = ({ data }) => {
  const chartData = {
    labels: data.map((member, index) => member.name),
    datasets: [
      {
        label: "Team Members",
        data: data.map((_, index) => index + 1),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: "Team Members Overview",
        font: {
          size: 20,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        color: "#333",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: {
          size: 16,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        bodyFont: {
          size: 14,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        footerFont: {
          size: 12,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
        padding: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          color: "#333",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        ticks: {
          font: {
            size: 12,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
          color: "#333",
          beginAtZero: true,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart",
    },
  };

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TeamChart;
