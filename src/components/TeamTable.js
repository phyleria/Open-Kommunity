import React, { useContext } from "react";
import TeamMemberRow from "./TeamMemberRow";
import TeamChart from "./TeamChart";
import { TeamContext } from "../TeamContext";
import "../Homepage.css";

const TeamTable = () => {
  const { teamMembers } = useContext(TeamContext);

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
