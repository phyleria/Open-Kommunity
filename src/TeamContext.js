import React, { createContext, useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const querySnapshot = await getDocs(collection(db, "teamMembers"));
      const membersList = querySnapshot.docs.map((doc) => doc.data());
      setTeamMembers(membersList);
    };

    fetchTeamMembers();
  }, []);

  const addTeamMember = async (member) => {
    await addDoc(collection(db, "teamMembers"), member);
    setTeamMembers((prevMembers) => [...prevMembers, member]);
  };

  return (
    <TeamContext.Provider value={{ teamMembers, addTeamMember }}>
      {children}
    </TeamContext.Provider>
  );
};
