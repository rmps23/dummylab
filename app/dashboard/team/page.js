"use client";

import NewTeam from "@components/Dashboard/Team/Form/NewTeam";
import DisplayTeams from "@components/Dashboard/Team/DisplayTeams";
import Modal from "@components/UI/Modal";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Team = () => {
  const [closeModal, setCloseModal] = useState(false);

  return (
    <>
      <div className="sm:px-4">
        <Modal
          btn="Create Team"
          icon={<FaPlus />}
          classes="bg-teal-600 px-6 py-3 mb-6 leading-none text-[14px] uppercase transition-all cursor-pointer inline-block rounded-sm hover:bg-teal-600 duration-500 group relative hover:rounded-r-none"
          form={<NewTeam setCloseModal={setCloseModal} />}
          title="Create New Team"
          closeModal={closeModal}
          setCloseModal={setCloseModal}
        />
        <div>
          <DisplayTeams />
        </div>
      </div>
    </>
  );
};

export default Team;
