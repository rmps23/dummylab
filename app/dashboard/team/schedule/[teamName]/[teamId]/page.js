"use client";

import { useState } from "react";
import TopBar from "@components/TopBar/TopBar";
import CircularLoading from "@components/UI/CircularLoading";
import TeamName from "@components/Dashboard/Team/TeamName";
import { useParams } from "next/navigation";
import Schedule from "@components/Dashboard/Schedule/Schedule";

export default function Players() {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const teamID = params.teamId;

  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-auto pt-16">
        <div className="max-w-7xl mx-auto p-3">
          {isLoading ? (
            <CircularLoading />
          ) : (
            <>
              <TeamName />
              <Schedule teamID={teamID} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
