"use client";

import PlayerPoolBar from "@components/Dashboard/ChampionPool/PlayerPoolBar";
import { useParams } from "next/navigation";

export default function Players() {
  const params = useParams();
  const teamID = params.teamId;

  return (
    <>
      <div className="bg-zinc-900 h-auto">
        <div className="max-w-7xl mx-auto">
          <PlayerPoolBar teamID={teamID} />
        </div>
      </div>
    </>
  );
}
