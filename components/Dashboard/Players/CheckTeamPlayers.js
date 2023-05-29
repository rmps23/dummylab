import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";

import CircularProgress from "@mui/material/CircularProgress";
import CheckPlayerRole from "./CheckPlayerRole";

const CheckTeamPlayers = ({ teamID }) => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);

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

        if (playerData) {
          playerData.sort((a, b) => {
            if (a.role_state === "Main" && b.role_state === "Sub") {
              return -1;
            } else if (a.role_state === "Sub" && b.role_state === "Main") {
              return 1;
            } else {
              return 0;
            }
          });
        }

        setPlayerData(playerData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <div>
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : playerData && playerData.length > 0 ? (
        playerData.map((player) => {
          return (
            <div
              key={player.id}
              className="bg-zinc-800 w-full flex-col px-6 py-4 items-center border border-zinc-800 hover:shadow-lg hover:shadow-teal-600/20 hover:border hover:border-teal-600/40 transition ease-in-out duration-200 rounded-md"
            >
              <div className="justify-between flex">
                <CheckPlayerRole role={player.role} />

                <p className="text-zinc-300 font-thin text-xs">
                  {player.role_state}
                </p>
              </div>
              <p className="text-lg text-teal-500 my-4 font-light">
                {player.name}
              </p>
              <div className="flex-row flex">
                <button className="bg-teal-600 flex items-center px-4 py-1 mr-4">
                  <span className="text-xs">Edit</span>
                </button>
                <button className="bg-teal-600 flex items-center px-4 py-1">
                  <span className="text-xs">Remove</span>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>This team has no players.</p>
      )}
    </div>
  );
};

export default CheckTeamPlayers;
