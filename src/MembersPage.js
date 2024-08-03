import React, { useState, useContext } from "react";
import TeamTable from "./components/TeamTable";
import RoleManager from "./components/RoleManager";
import { TeamContext } from "./TeamContext";
import "./Homepage.css";

const MembersPage = () => {
  const { teamMembers } = useContext(TeamContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMembers = searchTerm
    ? teamMembers.filter((member) =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : teamMembers;

  const handleExport = () => {
    const csvRows = [];
    const headers = ["ID", "Name", "Email", "Role"];
    csvRows.push(headers.join(","));

    filteredMembers.forEach(member => {
      const values = [member.id, member.name, member.email, member.role];
      csvRows.push(values.join(","));
    });

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "team_members.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="members">
      <div className="team-header">
        <h1>Members</h1>
        <div className="header-buttons">
          <RoleManager />
          <button className="button-export" onClick={handleExport}>Export</button>
        </div>
      </div>
      <div className="team-content">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <TeamTable members={filteredMembers} />
    </div>
  );
};

export default MembersPage;

