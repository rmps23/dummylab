"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import ProfileBanner from "@components/Dashboard/Profile/ProfileBanner";
import ProfilePlayers from "@components/Dashboard/Profile/ProfilePlayers";
import ShareLink from "@components/Dashboard/Profile/ShareLink";

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
      <div>
        <ProfileBanner />
        {/* <ProfilePlayers /> */}
        {/* <ShareLink /> */}
      </div>
    </>
  );
}
