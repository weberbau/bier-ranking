export default function Rankings({ teams }) {
  const sortedTeams = [...teams].sort((a, b) => b.beers - a.beers);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🍺 Bier-Ranking</h1>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Team</th>
            <th className="p-2">Liter Bier</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team) => (
            <tr key={team.id} className="border-t">
              <td className="p-2">{team.name}</td>
              <td className="p-2">{team.beers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}