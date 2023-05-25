"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import TopBar from "components/TopBar/TopBar";
import TeamName from "components/Dashboard/Team/TeamName";
import CircularProgress from "@mui/material/CircularProgress";

export default function Players() {
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
      <div className="bg-zinc-900 h-screen py-5 px-2">
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
              <div className="bg-zinc-950 rounded-md p-4">
                <h1 className="font-semibold text-teal-500 mb-4">Players</h1>
                <div>
                  <p>teste1</p>
                  <p>teste1</p>
                  <p>teste1</p>
                  <p>teste1</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
