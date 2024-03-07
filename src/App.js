import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MainEventsPage from "./MainEventsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main-events-page" element={<MainEventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
