import React from "react";

import TopBar from "../../../components/TopBar/TopBar";
import NewTeamButton from "../../../components/Dashboard/Team/NewTeamButton";
import CheckTeam from "../../../components/Dashboard/Team/CheckTeam";

const Team = () => {
  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-screen py-5 px-2">
        <div className="max-w-7xl mx-auto p-4 bg-neutral-950/60">
          <NewTeamButton />
          <CheckTeam />
        </div>
      </div>
    </>
  );
};

export default Team;
