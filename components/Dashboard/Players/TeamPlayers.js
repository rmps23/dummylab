import React, { useState } from "react";
import ModalUI from "@components/UI/ModalUI";
import Modal from "@components/UI/Modal";

import AddPlayer from "../Forms/Player/AddPlayer";
import { useParams } from "next/navigation";
import DisplayPlayers from "./DisplayPlayers";

const TeamPlayers = () => {
  const params = useParams();
  const teamName = params.teamName;
  const teamID = params.teamId;

  return (
    <>
      {/* <ModalUI
        btn="Create Player"
        classes="bg-teal-700 px-3 py-3 leading-none text-[12px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300 cursor-pointer"
        form={<AddPlayer teamName={teamName} teamID={teamID} />}
        title="Create New Player"
      /> */}

      <Modal
        btn="Create Player"
        icon={<FaPlus />}
        classes="bg-teal-600 px-6 py-3 leading-none text-[14px] uppercase transition-all cursor-pointer inline-block rounded-sm hover:bg-teal-600 duration-500 group relative hover:rounded-r-none"
        form={<AddPlayer teamName={teamName} teamID={teamID} />}
        title="Create New Player"
        closeModal={closeModal}
        setCloseModal={setCloseModal}
      />
      <DisplayPlayers teamID={teamID} teamName={teamName} />
    </>
  );
};

export default TeamPlayers;
