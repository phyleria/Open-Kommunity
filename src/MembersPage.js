import React from "react";
import TeamTable from "./components/TeamTable";
import "./Homepage.css";

const MembersPage = () => {
  return (
    <div className="members">
      <div className="team-header">
        <h1>Members</h1>
        <div className="header-buttons">
          <button className="button-2fa">Enforce 2FA</button>
          <button className="button-roles">Manage Roles</button>
          <button className="button-export">Export</button>
          <button className="button-invite">Invite Team</button>
        </div>
      </div>
      <div className="team-content">
        <div className="filters">
          <select>
            <option>All user roles</option>
            <option>Admin</option>
            <option>Member</option>
          </select>
          <input type="text" placeholder="Search" />
        </div>
        <TeamTable />
      </div>
    </div>
  );
};

export default MembersPage;
