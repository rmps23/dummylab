import React from "react";
import TopBar from "../../../components/TopBar/TopBar";

import dynamic from "next/dynamic";
const NewTeamButton = dynamic(() =>
  import("../../../components/Dashboard/Team/NewTeamButton")
);
const CheckTeam = dynamic(() =>
  import("../../../components/Dashboard/Team/CheckTeam")
);

const Team = () => {
  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-screen py-5 px-2">
        <div className="max-w-7xl mx-auto py-4 px-2">
          <NewTeamButton />
          <CheckTeam />
        </div>
      </div>
    </>
  );
};

export default Team;
