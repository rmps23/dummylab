"use client";

import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../../supabase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Items/Button";

const NewTeamForm = () => {
  const [name, setName] = useState("");
  const [teamID, setTeamID] = useState(null);
  const [shareCode, setShareCode] = useState(null);

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

    setTeamID(uuidv4());
    setShareCode(uuidv4());
    fetchSession();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("teams").insert({
        id: teamID,
        name: name,
        share_code: shareCode,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      // console.error("Error inserting team data:", error.message);
      toast.error("Failed to create team. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      toast.success("Team created successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTeamID(uuidv4());
      setShareCode(uuidv4());
      setTimeout(() => {
        window.location.href = "/dashboard/team";
      }, 1000);
    }
  };

  return (
    <form className="text-lg" onSubmit={handleSubmit}>
      <p className="text-2xl font-semibold text-teal-500 mb-4">
        CREATE NEW TEAM
      </p>
      <div className="flex items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-zinc-800 border border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200"
          placeholder="Insert team name..."
          required
        />
      </div>
      <br />
      <Button text="Confirm"></Button>
      <ToastContainer />
    </form>
  );
};

export default NewTeamForm;
