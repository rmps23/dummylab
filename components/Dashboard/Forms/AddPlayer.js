import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../../supabase";

import Button from "components/Items/Button";
import CircularProgress from "@mui/material/CircularProgress";

const AddPlayer = ({ teamID, teamName }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Top");
  const [roleState, setRoleState] = useState("Main");

  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data: playerData, error: insertError } = await supabase
        .from("players")
        .insert({
          name: name,
          role: role,
          role_state: roleState,
          teamId: teamID,
        })
        .select();

      if (insertError) {
        throw error;
      }

      const { error: lastInserError } = await supabase
        .from("champion_pool")
        .insert({
          userID: playerData[0].id,
        });

      if (lastInserError) {
        throw error;
      }
    } catch (error) {
      console.error("Error: " + error);
    } finally {
      setComplete(true);
      setIsLoading(false);
      setTimeout(() => {
        window.location.href =
          `/dashboard/team/players/` + teamName + "/" + teamID;
      }, 1000);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full items-center text-center">
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : complete ? (
        <div className="text-center">
          <p className="text-teal-500">Player added with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <form className="text-lg" onSubmit={handleSubmit}>
          <p className="text-sm text-teal-500 text-center absolute left-5 top-6 font-light uppercase">
            Create Player
          </p>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md"
              placeholder="Insert team name..."
              required
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md cursor-pointer"
              placeholder="Player role..."
              required
            >
              <option value="Top">Top</option>
              <option value="Jungler">Jungler</option>
              <option value="Mid">Mid</option>
              <option value="Bottom">Bottom</option>
              <option value="Support">Support</option>
            </select>
            <select
              value={roleState}
              onChange={(e) => setRoleState(e.target.value)}
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md cursor-pointer"
              placeholder="Main/Sub"
              required
            >
              <option value="Main">Main</option>
              <option value="Sub">Sub</option>
            </select>
          </div>
          <br />
          <div className="w-full text-center">
            <Button text="Confirm"></Button>
          </div>
        </form>
      )}
    </>
  );
};

export default AddPlayer;
