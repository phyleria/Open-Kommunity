import React from "react";

const TeamMemberRow = ({ number, member }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{member.name}</td>
      <td>{member.email}</td>
      <td>{member.role}</td>
      <td>{member.status}</td>
      <td>{member.lastLogin}</td>
    </tr>
  );
};

export default TeamMemberRow;
