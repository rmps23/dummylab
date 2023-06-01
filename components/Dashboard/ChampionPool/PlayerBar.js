import React from "react";
import { supabase } from "../../../supabase";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

import CircularProgress from "@mui/material/CircularProgress";
import PlayerPool from "./PlayerPool";
import Link from "next/link";
import Button from "../../Items/Button";

const PlayerBar = ({ teamID }) => {
  const params = useParams();
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
            if (a.role_state === "Main" && b.role_state !== "Main") {
              return -1;
            } else if (a.role_state !== "Main" && b.role_state === "Main") {
              return 1;
            } else {
              const rolesOrder = ["Top", "Jungler", "Mid", "Bottom", "Support"];
              const roleA = a.role;
              const roleB = b.role;
              const indexA = rolesOrder.indexOf(roleA);
              const indexB = rolesOrder.indexOf(roleB);

              if (indexA < indexB) {
                return -1;
              } else if (indexA > indexB) {
                return 1;
              } else {
                return 0;
              }
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
    <div>
      {loading ? (
        <div>
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : playerData && playerData.length > 0 ? (
        playerData.map((player, index) => {
          return (
            <div key={player.id} className="relative mb-5">
              <div className="backdrop-filter backdrop-blur-sm backdrop-opacity-50 bg-opacity-60 shadow-md shadow-zinc-950 bg-zinc-950 rounded-md p-4">
                <span className="uppercase font-light text-sm">
                  {player.role}
                </span>{" "}
                /{" "}
                <span className="uppercase font-light text-sm text-teal-500">
                  {player.name}
                </span>
                <PlayerPool playerID={player.id} />
                <Link
                  href={`/dashboard/team/champion_pool/${params.teamName}/${teamID}/edit/${player.id}`}
                >
                  <Button text={"Edit Pool"}></Button>
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <div className="backdrop-filter backdrop-blur-sm backdrop-opacity-50 bg-opacity-60 shadow-md shadow-zinc-950 bg-zinc-950 rounded-md pb-0 h-[140px] p-4">
          <p>This team has no players.</p>
        </div>
      )}
    </div>
  );
};

export default PlayerBar;
