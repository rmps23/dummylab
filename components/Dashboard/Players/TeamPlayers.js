import React, { useState } from "react";
import ModalUI from "@components/UI/ModalUI";
import Modal from "@components/UI/Modal";
import { FaPlus } from "react-icons/fa";

import AddPlayer from "../Forms/Player/AddPlayer";
import { useParams } from "next/navigation";
import DisplayPlayers from "./DisplayPlayers";

const TeamPlayers = () => {
  const [closeModal, setCloseModal] = useState(false);

  const params = useParams();
  const teamName = params.teamName;
  const teamID = params.teamId;

  return (
    <>
      <Modal
        btn="Create Player"
        icon={<FaPlus />}
        classes="bg-teal-600 px-6 py-3 leading-none text-[14px] uppercase transition-all cursor-pointer inline-block rounded-sm hover:bg-teal-600 duration-500 group relative hover:rounded-r-none"
        form={
          <AddPlayer
            teamName={teamName}
            teamID={teamID}
            closeModal={closeModal}
            setCloseModal={setCloseModal}
          />
        }
        title="Create New Player"
        closeModal={closeModal}
        setCloseModal={setCloseModal}
      />
      <DisplayPlayers
        teamID={teamID}
        teamName={teamName}
        closeModal={closeModal}
        setCloseModal={setCloseModal}
      />
    </>
  );
};

export default TeamPlayers;
