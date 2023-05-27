"use client";

import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../../supabase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Items/Button";
import CircularProgress from "@mui/material/CircularProgress";

const NewTeamForm = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      const { error } = await supabase.from("teams").insert({
        name: name,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
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
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setIsLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard/team";
      }, 1000);
    }
  };

  return (
    <form className="text-lg" onSubmit={handleSubmit}>
      <p className="text-lg text-teal-500 mb-4 w-full text-center">
        Create New Team
      </p>
      <div className="flex items-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200"
          placeholder="Insert team name..."
          required
        />
        {isLoading && (
          <p>
            <CircularProgress
              size={20}
              className="text-teal-500 mt-2 ml-2"
              color="inherit"
            />
          </p>
        )}
      </div>
      <br />
      <div className="w-full text-center">
        <Button text="Confirm"></Button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default NewTeamForm;
