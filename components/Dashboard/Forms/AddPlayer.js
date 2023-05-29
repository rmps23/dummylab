import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../../supabase";

import Button from "components/Items/Button";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

const AddPlayer = ({ teamID, teamName }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Top");
  const [roleState, setRoleState] = useState("Main");

  const [isLoading, setIsLoading] = useState(false);
  console.log(teamName);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();

        if (sessionError) {
          throw sessionError;
        }
      } catch (error) {
        console.error("Error fetching team data:", error.message);
      }
    };

    fetchSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.from("players").insert({
        name: name,
        role: role,
        role_state: roleState,
        teamId: teamID,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error: " + error);
    } finally {
      toast.success("Team created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false);
      setTimeout(() => {
        window.location.href =
          `/dashboard/team/players/` + teamName + "/" + teamID;
      }, 1000);
    }
  };

  return (
    <form className="text-lg" onSubmit={handleSubmit}>
      <p className="text-lg text-teal-500 mb-4 w-full text-center">
        Add New Player
      </p>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200"
          placeholder="Insert team name..."
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200"
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
          className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200"
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
      <ToastContainer />
    </form>
  );
};

export default AddPlayer;
