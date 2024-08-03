import React, { createContext, useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "./firebase-config";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const querySnapshot = await getDocs(collection(db, "teamMembers"));
      const membersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTeamMembers(membersList);
    };

    fetchTeamMembers();
  }, []);

  const addTeamMember = async (member) => {
    const docRef = await addDoc(collection(db, "teamMembers"), member);
    setTeamMembers((prevMembers) => [...prevMembers, { id: docRef.id, ...member }]);
  };

  const updateTeamMemberRole = async (memberId, newRole) => {
    const memberRef = doc(db, "teamMembers", memberId);
    await updateDoc(memberRef, { role: newRole });
    setTeamMembers((prevMembers) =>
      prevMembers.map((member) =>
        member.id === memberId ? { ...member, role: newRole } : member
      )
    );
  };

  return (
    <TeamContext.Provider value={{ teamMembers, addTeamMember, updateTeamMemberRole }}>
      {children}
    </TeamContext.Provider>
  );
};
