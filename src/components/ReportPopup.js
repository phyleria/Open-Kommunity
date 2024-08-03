import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Chart, registerables } from 'chart.js';
import '../Homepage.css';

Chart.register(...registerables);

const ReportPopup = ({ isOpen, onClose, data, onGenerateReport }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (isOpen && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Email Subscribers', 'Open Email', 'Events Created', 'Event RSVPs', 'Total Members'],
          datasets: [{
            label: 'Statistics',
            data: [data.emailSubscribers, data.openEmail, data.eventsCreated, data.eventRSVPs, data.totalMembers],
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true 
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [isOpen, data]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = chartRef.current.toDataURL('image/png');
    link.download = 'report.png';
    link.click();
  };

  return (
    isOpen && (
      <div className="report-popup">
        <div className="report-popup-content">
          Generate Report
          <canvas ref={chartRef}></canvas>
          <div className="report-options">
            <label htmlFor="report-period">Select Report Period:</label>
            <select id="report-period">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="report-actions">
            <button onClick={handleDownload}>Download</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    )
  );
};

ReportPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    emailSubscribers: PropTypes.number.isRequired,
    openEmail: PropTypes.number.isRequired,
    eventsCreated: PropTypes.number.isRequired,
    eventRSVPs: PropTypes.number.isRequired,
    totalMembers: PropTypes.number.isRequired,
  }).isRequired,
  onGenerateReport: PropTypes.func.isRequired,
};

export default ReportPopup;