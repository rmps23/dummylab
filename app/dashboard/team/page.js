"use client";

import NewTeam from "@components/Dashboard/Team/Form/NewTeam";
import DisplayTeams from "@components/Dashboard/Team/DisplayTeams";
import Modal from "@components/UI/Modal";
import { FaPlus } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <Modal
        btn="Create Team"
        icon={<FaPlus />}
        classes="bg-gradient-to-r from-teal-600 to-teal-800 text-zinc-200 border border-zinc-800 px-6 py-3 mb-6 leading-none text-[14px] transition-all cursor-pointer inline-block rounded-md group relative hover:rounded-r-none"
        form={<NewTeam />}
        title="Create New Team"
      />
      <div>
        <DisplayTeams />
      </div>
    </>
  );
};

export default Team;
