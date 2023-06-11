"use client";

import Link from "next/link";

const Match = ({ match }) => {
  return (
    <Link href={`/matches/${match.id}`}>
      <div>
        <div>
          <span>{match.team1}</span>
          <span>vs</span>
          <span>{match.team2}</span>
        </div>

        <div>
          <span>Odds: {match.odds.team1}</span>
          <span>Odds: {match.odds.team2}</span>
        </div>
        <div>{match.date}</div>
      </div>
    </Link>
  );
};

export default Match;
