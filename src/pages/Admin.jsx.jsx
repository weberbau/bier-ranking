import { useState } from "react";

export default function Admin({ teams, setTeams }) {
  const [localTeams, setLocalTeams] = useState(teams);

  const handleChange = (id, value) => {
    const updated = localTeams.map((team) =>
      team.id === id ? { ...team, beers: Number(value) } : team
    );
    setLocalTeams(updated);
  };

  const saveChanges = () => {
    setTeams(localTeams);
    alert("Änderungen gespeichert!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🔧 Adminbereich</h1>
      {localTeams.map((team) => (
        <div key={team.id} className="mb-4">
          <label className="block font-semibold mb-1">{team.name}</label>
          <input
            type="number"
            min="0"
            value={team.beers}
            onChange={(e) => handleChange(team.id, e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <button
        onClick={saveChanges}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Speichern
      </button>
    </div>
  );
}