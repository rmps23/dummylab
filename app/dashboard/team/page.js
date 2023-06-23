"use client";

import TopBar from "components/TopBar/TopBar";
import NewTeam from "components/Dashboard/Forms/Team/NewTeam";
import ModalUI from "@components/UI/ModalUI";
import DisplayTeams from "@components/Dashboard/Team/DisplayTeams";

const Team = () => {
  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-auto pt-20">
        <div className="max-w-7xl mx-auto p-4">
          <ModalUI
            btn="Create Team"
            classes="bg-teal-700 px-3 py-3 leading-none text-[12px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300"
            form={<NewTeam />}
            title="Create New Team"
          />
          <div>
            <DisplayTeams />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
