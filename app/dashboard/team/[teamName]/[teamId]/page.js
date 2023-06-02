"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TopBar from "../../../../../components/TopBar/TopBar";
import TeamName from "components/Dashboard/Team/TeamName";

import CircularProgress from "@mui/material/CircularProgress";
import Players from "components/Dashboard/Profile/Players";

export default function Profile() {
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
              <div className="rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid">
                <Players teamID={teamID} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
