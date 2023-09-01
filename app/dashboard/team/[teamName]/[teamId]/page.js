"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "@components/UI/Modal";

import ProfileBanner from "@components/Dashboard/Profile/ProfileBanner";
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
      <div className="">
        <ProfileBanner />
        <ProfilePlayers />
        {/* <Modal
          btn="Settings"
          icon={""}
          classes="flex bg-zinc-950 h-28 justify-center rounded-md uppercase cursor-pointer shadow-md hover:shadow-teal-600/20 transition-all duration-300 text-zinc-400"
          form={""}
          title="Create New Team"
        /> */}
      </div>
    </>
  );
}
