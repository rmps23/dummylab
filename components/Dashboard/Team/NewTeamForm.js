"use client";

import React from "react";
import { useState } from "react";

const NewTeamForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    // setName(e.value.name);
  };

  return (
    <form className="text-lg" onSubmit={handleSubmit}>
      <p className="text-3xl font-semibold text-teal-500 mb-4">
        CREATE NEW TEAM
      </p>
      <p className="text-sm text-neutral-300 font-semibold">Team Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-zinc-800 border border-teal-500/20 outline-none h-8 mt-1 mb-4 px-2 text-sm"
      />
      <br />
      <button className="bg-teal-700 px-4 py-1 text-sm" type="submit">
        Confirm
      </button>
    </form>
  );
};

export default NewTeamForm;
