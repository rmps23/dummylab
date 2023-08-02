"use client";

import { supabase } from "@supabase";
import { useState } from "react";
import { useRef } from "react";
import { useMutation } from "react-query";

import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";
import useTeamStore from "@components/Store/teamStore";
import React from "react";
import { HuePicker } from "react-color";

const NewTeamForm = ({ setOpen }) => {
  const addTeam = useTeamStore((state) => state.addTeam);
  const teamName = useRef(null);
  const teamDesc = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [changeName, setChangeName] = useState("Team A");

  const handleNameChange = (event) => {
    setChangeName(event.target.value);
    if (event.target.value === "") {
      setChangeName("Team A");
    }
  };

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data: team } = await mutationTeam.mutateAsync({
      name: teamName.current.value,
      color: selectedColor,
    });

    addTeam(team[0]);
    setOpen(false);
  };

  const mutationTeam = useMutation((values) => {
    return supabase.from("team").insert(values).select();
  });

  return (
    <>
      {isLoading ? (
        <div className="w-full items-center text-center">
          <CircularLoading />
        </div>
      ) : (
        <div className="max-w-[1000px] mx-auto rounded-md mt-10">
          <form className="text-lg" onSubmit={handleSubmit}>
            <span className="pb-2 flex text-zinc-300 text-base">
              Select a color to identify your team
            </span>
            <div className="mb-8 rounded-md px-4 py-6 bg-zinc-800">
              <HuePicker
                color={selectedColor}
                onChange={handleColorChange}
                width="100%"
              />
            </div>
            <div className="flex-col flex">
              <span className="pb-2 flex text-zinc-300 text-base">
                Insert team name below
              </span>
              <input
                type="text"
                ref={teamName}
                className="bg-zinc-800 border-b-2 border-teal-500/20 outline-none px-4 py-3 text-md focus:border-teal-600 focus:placeholder-transparent transition ease-in-out duration-200 text-zinc-200 rounded-md mb-8 placeholder:text-sm"
                placeholder="Insert team name here..."
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="flex-col flex">
              <span className="pb-2 flex text-zinc-300 text-base">
                Insert team league
              </span>
              <input
                type="text"
                ref={teamDesc}
                className="bg-zinc-800 border-b-2 border-teal-500/20 outline-none px-4 py-3 text-md focus:border-teal-600 focus:placeholder-transparent transition ease-in-out duration-200 text-zinc-200 rounded-md mb-8 placeholder:text-sm"
                placeholder="LEC Spring Split 2023..."
                onChange={handleNameChange}
              />
            </div>
            <div className="w-full text-right">
              <Button text="Confirm"></Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default NewTeamForm;
