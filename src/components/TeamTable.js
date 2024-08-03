import React from "react";
import PropTypes from "prop-types";
import TeamMemberRow from "./TeamMemberRow";
import TeamChart from "./TeamChart";
import "../Homepage.css";

const TeamTable = ({ members }) => {
  const sortedMembers = [...members].sort((a, b) => (a.role === "admin" ? -1 : 1));

  return (
    <div>
      <table className="team-table">
        <thead>
          <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
          </tr>
        </thead>
        <tbody>
          {sortedMembers.map((member, index) => (
            <TeamMemberRow key={index} number={index + 1} member={member} />
          ))}
        </tbody>
      </table>
      <TeamChart members={members} />
    </div>
  );
};

TeamTable.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TeamTable;
