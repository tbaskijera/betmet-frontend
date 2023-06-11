"use client";

import Link from "next/link";

const Match = ({ match }) => {
  return (
    <Link href={`/matches/${match.id}`}>
      <div className="p-4 border rounded shadow-md mb-4 hover:border-red-500">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold">{match.team1}</span>
          <span className="text-lg">vs</span>

          <span className="text-lg font-bold">{match.team2}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm">Odds: {match.odds.team1}</span>
          <span className="text-sm">Odds: {match.odds.team2}</span>
        </div>
        <div className="flex justify-center mt-2 text-sm text-gray-500">
          {match.date}
        </div>
      </div>
    </Link>
  );
};

export default Match;
