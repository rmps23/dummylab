"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import TopBar from "components/TopBar/TopBar";
import TeamName from "components/Dashboard/Team/TeamName";
import PlayerBar from "components/Dashboard/ChampionPool/PlayerBar";

export default function ChampionPool() {
  const params = useParams();
  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
    setIsLoading(false);
  }, []);

  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-auto py-5 px-2">
        <div className="max-w-7xl mx-auto py-4 px-2">
          {isLoading ? (
            <CircularProgress
              size={20}
              className="text-teal-500"
              color="inherit"
            />
          ) : (
            <>
              <TeamName teamName={teamName} />
              <div>
                <PlayerBar teamID={teamID} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
