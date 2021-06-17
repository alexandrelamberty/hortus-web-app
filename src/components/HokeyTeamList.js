function HockeyTeamItem({ team }) {
  return (
    <li className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={team.logo} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{team.name}</p>
        <p className="text-sm text-gray-500">{team.city}</p>
      </div>
    </li>
  );
}

export default function HockeyTeamList({ teams }) {
  return (
    <ul className="divide-y divide-gray-200">
      {teams.map((team) => (
        <HockeyTeamItem key={team.id} team={team} />
      ))}
    </ul>
  );
}
