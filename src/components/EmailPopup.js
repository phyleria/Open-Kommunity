import React, { useState } from "react";
import "../Homepage.css";

const EmailPopup = ({ isOpen, onClose, onSend }) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
    onSend({ subject, content });
    onClose();
  };

  return (
    <div className="email-popup-overlay">
      <div className="email-popup">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <p>Send Email</p>
        <div className="input-container">
          <div className="subject">
            <input
              type="text"
              placeholder="Email Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="email-space">
            <textarea
              placeholder="Email Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default EmailPopup;
