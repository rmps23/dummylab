"use client";

import { useState } from "react";
import TopBar from "@components/TopBar/TopBar";
import CircularLoading from "@components/UI/CircularLoading";
import TeamName from "@components/Dashboard/Team/TeamName";
import TeamPlayers from "@components/Dashboard/Players/TeamPlayers";

export default function Players() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-auto pt-20">
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
