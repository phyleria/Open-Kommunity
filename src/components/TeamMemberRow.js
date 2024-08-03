import React from "react";

const TeamMemberRow = ({ number, member }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{member.name}</td>
      <td>{member.email}</td>
      <td>{member.role}</td> {/* Ensure role is displayed */}
    </tr>
  );
};

export default TeamMemberRow;

