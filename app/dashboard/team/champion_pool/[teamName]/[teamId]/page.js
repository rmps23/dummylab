"use client";

import { useState } from "react";
import CircularLoading from "@components/UI/CircularLoading";
import PlayerPoolBar from "@components/Dashboard/ChampionPool/PlayerPoolBar";
import { useParams } from "next/navigation";

export default function Players() {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const teamID = params.teamId;

  return (
    <>
      <div className="bg-zinc-900 h-auto pt-16">
        <div className="max-w-7xl mx-auto p-3">
          {isLoading ? (
            <CircularLoading />
          ) : (
            <>
              <PlayerPoolBar teamID={teamID} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
