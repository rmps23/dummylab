"use client";

import { useState } from "react";
import TopBar from "@components/TopBar/TopBar";
import CircularLoading from "@components/UI/CircularLoading";
import TeamName from "@components/Dashboard/Team/TeamName";
import PlayerPoolBar from "@components/Dashboard/ChampionPool/PlayerPoolBar";
import { useParams } from "next/navigation";

export default function Players() {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const teamID = params.teamId;

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
              <PlayerPoolBar teamID={teamID} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
