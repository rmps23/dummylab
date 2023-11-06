"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "@components/UI/Modal";

import ProfileBanner from "@components/Dashboard/Profile/ProfileBanner";
import ProfilePlayers from "@components/Dashboard/Profile/ProfilePlayers";
import MainPlayers from "@components/Dashboard/Profile/MainPlayers";
import Events from "@components/Dashboard/Profile/Events";

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
        <ProfilePlayers />
        <div className="grid grid-cols-1 gap-y-4">
          <div className="">
            <MainPlayers />
          </div>
          <div className="">
            <Events />
          </div>
        </div>
      </div>
    </>
  );
}
