import React from "react";

const TeamMemberRow = ({ number, member }) => (
  <tr>
    <td>{number}</td>
    <td>{member.name}</td>
    <td>{member.email}</td>
  </tr>
);

export default TeamMemberRow;
