import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rankings from "./pages/Rankings";
import Admin from "./pages/Admin";
import { useState } from "react";

export default function App() {
  const [teams, setTeams] = useState([
    { id: 1, name: "Team Alpha", beers: 12 },
    { id: 2, name: "Team Beta", beers: 9 },
    { id: 3, name: "Team Gamma", beers: 6 },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rankings teams={teams} />} />
        <Route path="/admin" element={<Admin teams={teams} setTeams={setTeams} />} />
      </Routes>
    </Router>
  );
}
