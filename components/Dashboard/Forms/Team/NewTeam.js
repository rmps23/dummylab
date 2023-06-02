"use client";

import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../../../supabase";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../Items/Button";
import CircularProgress from "@mui/material/CircularProgress";

const NewTeamForm = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

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
      console.log("Error:" + error);
    } finally {
      setComplete(true);
      setIsLoading(false);
      setTimeout(() => {
        window.location.href = "/dashboard/team";
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
          <p className="text-teal-500">Team created with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <form className="text-lg" onSubmit={handleSubmit}>
          <p className="text-sm text-teal-500 text-center absolute left-5 top-6 font-light uppercase">
            Create New Team
          </p>
          <div className="flex-col flex">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md"
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
        </form>
      )}
    </>
  );
};

export default NewTeamForm;
