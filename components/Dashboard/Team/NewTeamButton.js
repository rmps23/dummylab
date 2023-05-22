"use client";

import React from "react";

const NewTeam = () => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <a
        href="/dashboard/team/new"
        className="text-sm bg-teal-600 text-neutral-100 font-semibold px-3 py-1  hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300 rounded-sm"
      >
        New Team
      </a>
    </>
  );
};

export default NewTeam;
