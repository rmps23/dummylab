"use client";

import NewTeam from "components/Dashboard/Forms/Team/NewTeam";
import ModalUI from "@components/UI/ModalUI";
import DisplayTeams from "@components/Dashboard/Team/DisplayTeams";
import Modal from "@components/UI/Modal";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const Team = () => {
  const [checkNew, setCheckNew] = useState();
  const [closeModal, setCloseModal] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <Modal
          btn="Create Team"
          icon={<FaPlus />}
          classes="bg-teal-600 px-6 py-3 leading-none text-[14px] uppercase transition-all cursor-pointer inline-block rounded-sm hover:bg-teal-600 duration-500 group relative hover:rounded-r-none"
          form={
            <NewTeam setCheckNew={setCheckNew} setCloseModal={setCloseModal} />
          }
          title="Create New Team"
          closeModal={closeModal}
          setCloseModal={setCloseModal}
        />
        <div>
          <DisplayTeams checkNew={checkNew} />
        </div>
      </div>
    </>
  );
};

export default Team;
