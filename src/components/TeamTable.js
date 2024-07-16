import React from "react";
import TeamMemberRow from "./TeamMemberRow";
import TeamChart from "./TeamChart";

const teamMembers = [
  {
    name: "Bagus Fikri",
    email: "bagusfikri@gmail.com",
    role: "Admin",
    status: "Enabled",
    lastLogin: "Jul 13, 2024 07:31 PM",
  },
  {
    name: "Phylis Atieno",
    email: "atienophyllis032@gmail.com",
    role: "Member",
    status: "Disabled",
    lastLogin: "Jul 13, 2024 05:25 PM",
  },
  // Add more team members as needed
];

const TeamTable = () => {
  return (
    <div>
      <table className="team-table">
        <thead>
          <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>2FA STATUS</th>
            <th>LAST LOGIN</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <TeamMemberRow key={index} number={index + 1} member={member} />
          ))}
        </tbody>
      </table>
      <TeamChart data={teamMembers} />
    </div>
  );
};

export default TeamTable;
