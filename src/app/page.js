"use client";
import Match from "@/components/match";
import { matches } from "../../mockData";
import Link from "next/link";
//import Navbar from "@/components/navbar";

import React from "react";
import useAuthStore from "@/zustand/AuthStore";

const App = () => {
  return (
    <div>
      <div>
        <div className="m-20">
          {matches.map((match) => (
            <Match key={match.id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
