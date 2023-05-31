import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";

import CircularProgress from "@mui/material/CircularProgress";
import { FaUsers } from "react-icons/fa";

const Players = ({ teamID }) => {
  const [countPlayers, setCountPlayers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: playerData, error: playerError } = await supabase
          .from("players")
          .select("*")
          .eq("teamId", teamID);

        if (playerError) {
          throw playerError;
        }

        setCountPlayers(playerData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <FaUsers className="absolute text-zinc-300/20 text-[200px] -right-6 group-hover:text-teal-500/80 transition ease-in-out duration-300" />
      <div className="backdrop-filter backdrop-blur-sm backdrop-opacity-50 bg-opacity-60 shadow-md shadow-zinc-950 bg-zinc-950 rounded-md pb-0 h-[200px]">
        {isLoading ? (
          <div>
            <CircularProgress
              size={20}
              className="text-teal-500"
              color="inherit"
            />
          </div>
        ) : countPlayers ? (
          <div className="h-[200px] flex items-center justify-start px-14">
            <p className="text-8xl font-bold mr-10 text-teal-500/50">
              {countPlayers.length}
            </p>
            <span className="text-sm font-light uppercase">
              {countPlayers.length > 1 ? (
                <p>Players</p>
              ) : countPlayers.length === 1 ? (
                <p>Player</p>
              ) : (
                <p>Players</p>
              )}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Players;
