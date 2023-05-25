import React from "react";
import { RiShieldFlashFill } from "react-icons/ri";

const TeamName = ({ teamName }) => {
  return (
    <div className="w-full flex items-center mb-5">
      <RiShieldFlashFill className="mr-4 bg-zinc-950 shadow-md shadow-teal-600/40 rounded-full p-3 h-14 w-14" />
      <span className="text-teal-500 font-semibold text-xl uppercase">
        {teamName}
      </span>
    </div>
  );
};

export default TeamName;
