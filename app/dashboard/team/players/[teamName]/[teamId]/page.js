"use client";

import { useState } from "react";
import CircularLoading from "@components/UI/CircularLoading";
import TeamName from "@components/Dashboard/Team/TeamName";
import TeamPlayers from "@components/Dashboard/Players/TeamPlayers";

export default function Players() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="bg-zinc-900 h-auto pt-16">
        <div className="max-w-7xl mx-auto p-3">
          {isLoading ? (
            <CircularLoading />
          ) : (
            <>
              <TeamName />
              <TeamPlayers />
            </>
          )}
        </div>
      </div>
    </>
  );
}
