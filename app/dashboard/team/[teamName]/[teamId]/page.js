"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProfilePlayers from "@components/Dashboard/Profile/ProfilePlayers";

export default function Profile() {
  const params = useParams();
  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
  }, [params.teamId, params.teamName]);

  return (
    <>
      <div className="bg-zinc-900 h-auto">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-md grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid">
            <ProfilePlayers />
          </div>
        </div>
      </div>
    </>
  );
}
