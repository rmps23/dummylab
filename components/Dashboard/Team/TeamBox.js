import React from "react";

const TeamBox = ({ name }) => {
  return (
    <a
      href="#"
      className="bg-neutral-900 border border-teal-900 text-neutral-300 w-1/3 p-4 hover:bg-neutral-800 transition ease-in-out duration-200 text-xs"
    >
      <p>{name}</p>
      <p>Split</p>
    </a>
  );
};

export default TeamBox;
