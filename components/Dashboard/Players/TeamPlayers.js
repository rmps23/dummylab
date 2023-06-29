import React, { useState } from "react";
import ModalUI from "@components/UI/ModalUI";
import AddPlayer from "../Forms/Player/AddPlayer";
import { useParams } from "next/navigation";
import DisplayPlayers from "./DisplayPlayers";

const TeamPlayers = () => {
  const params = useParams();
  const teamName = params.teamName;
  const teamID = params.teamId;

  return (
    <>
      <ModalUI
        btn="Create Player"
        classes="bg-teal-700 px-3 py-3 leading-none text-[12px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300 cursor-pointer"
        form={<AddPlayer teamName={teamName} teamID={teamID} />}
        title="Create New Player"
      />
      <DisplayPlayers teamID={teamID} teamName={teamName} />
    </>
  );
};

export default TeamPlayers;
