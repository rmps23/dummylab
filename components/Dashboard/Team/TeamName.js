import React from "react";
import { RiShieldFlashFill } from "react-icons/ri";

const TeamName = ({ teamName }) => {
  return (
    <div className="relative overflow-hidden mb-5">
      <RiShieldFlashFill className="absolute text-zinc-300/20 text-[150px] -top-8 group-hover:text-teal-500/80 transition ease-in-out duration-300" />
      <div className="backdrop-filter backdrop-blur-sm backdrop-opacity-50 bg-opacity-60 shadow-md shadow-zinc-950 bg-zinc-950 rounded-md min-h-[80px] items-center flex px-10">
        <span className="text-teal-500 text-xl uppercase">{teamName}</span>
      </div>
    </div>
  );
};

export default TeamName;
