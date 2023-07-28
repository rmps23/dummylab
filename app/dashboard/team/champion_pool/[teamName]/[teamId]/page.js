"use client";

import PlayerPoolBar from "@components/Dashboard/ChampionPool/PlayerPoolBar";
import { useParams } from "next/navigation";

export default function Players() {
  const params = useParams();
  const teamID = params.teamId;

  return (
    <>
      <div className="sm:px-4 mx-auto">
        <PlayerPoolBar teamID={teamID} />
      </div>
    </>
  );
}
