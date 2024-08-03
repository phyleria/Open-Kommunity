import React, { useContext, useState } from "react";
import { TeamContext } from "../TeamContext";
import "../Homepage.css";

const RoleManager = () => {
  const { teamMembers, updateTeamMemberRole } = useContext(TeamContext);
  const [selectedMember, setSelectedMember] = useState(null);
  const [newRole, setNewRole] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRoleChange = () => {
    if (selectedMember && newRole) {
      updateTeamMemberRole(selectedMember.id, newRole);
      setSelectedMember(null);
      setNewRole("");
      setShowModal(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={openModal}>Change Role</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <select onChange={(e) => setSelectedMember(JSON.parse(e.target.value))}>
              <option value="">Select a member</option>
              {teamMembers.map((member) => (
                <option key={member.id} value={JSON.stringify(member)}>
                  {member.name}
                </option>
              ))}
            </select>
            <select onChange={(e) => setNewRole(e.target.value)}>
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="member">Member</option>
            </select>
            <div style={{ display: "flex", justifyContent: "center" }}>

            <button onClick={handleRoleChange}>Change Role</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoleManager;
