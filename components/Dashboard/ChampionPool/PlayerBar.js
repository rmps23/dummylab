import React from "react";
import { supabase } from "../../../supabase";
import { useEffect, useState, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "components/Items/Button";
import PlayerPool from "./PlayerPool";
import Dialog from "@mui/material/Dialog";
import Modal from "components/Items/Modal";
import ButtonModal from "components/Items/ButtonModal";
import EditPool from "../Forms/EditPool";

const PlayerBar = ({ teamID }) => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editPool, setEditPool] = useState(null);
  const [viewPool, setViewPool] = useState(false);

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

  const handleViewPool = (playerId) => {
    setSelectedPlayerId(playerId);
  };

  return (
    <div>
      {" "}
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
            <div key={player.id} className="relative overflow-hidden mb-4">
              <div className="backdrop-filter backdrop-blur-sm backdrop-opacity-50 bg-opacity-60 shadow-md shadow-zinc-950 bg-zinc-950 rounded-md pb-0 p-4">
                <div className="text-sm font-light uppercase text-zinc-400 justify-between flex mb-2">
                  <span>
                    {player.role} /{" "}
                    <span className="text-teal-500">{player.name}</span>
                  </span>
                  <ButtonModal
                    text={"Edit Pool"}
                    click={() => handleViewPool(player.id)}
                  />
                </div>
                <div className="flex-row">
                  <PlayerPool playerID={player.id} />
                  {viewPool === true && <EditPool ref={editpool} />}
                </div>
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
