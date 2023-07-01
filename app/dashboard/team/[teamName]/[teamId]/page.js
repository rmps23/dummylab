"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TopBar from "../../../../../components/TopBar/TopBar";
import TeamName from "components/Dashboard/Team/TeamName";
import CircularLoading from "@components/UI/CircularLoading";

export default function Profile() {
  const params = useParams();
  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
    setIsLoading(false);
  }, [params.teamId, params.teamName]);

  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-auto pt-16">
        <div className="max-w-7xl mx-auto p-4">
          {isLoading ? (
            <CircularLoading />
          ) : (
            <>
              <TeamName teamName={teamName} />
              <div className="rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
