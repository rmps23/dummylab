"use client";

// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import { supabase } from "../../../supabase";

import TopBar from "components/TopBar/TopBar";
// import Modal from "components/Items/Modal";
// import ButtonModal from "components/Items/ButtonModal";
// const CheckTeam = dynamic(() => import("components/Dashboard/Team/CheckTeam"));
// const NewTeam = dynamic(() => import("components/Dashboard/Forms/NewTeam"));

import CreateNewTeam from "../../../components/Dashboard/Team/CreateNewTeam";

const Team = () => {
  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-auto pt-14">
        <div className="max-w-7xl mx-auto p-4">
          <CreateNewTeam />
        </div>
      </div>
    </>
  );
};

export default Team;
