"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TopBar from "../../../../../components/TopBar/TopBar";
import CircularProgress from "@mui/material/CircularProgress";

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
      <div className="bg-zinc-900 h-screen py-5 px-2">
        <div className="max-w-7xl mx-auto p-4 bg-neutral-950/60">
          {isLoading ? (
            <CircularProgress
              size={20}
              className="text-teal-500"
              color="inherit"
            />
          ) : (
            <div>
              {teamName}
              <br />
              {teamID}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
