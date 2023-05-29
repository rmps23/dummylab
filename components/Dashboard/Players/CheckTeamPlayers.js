import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import dynamic from "next/dynamic";

import CircularProgress from "@mui/material/CircularProgress";
import CheckPlayerRole from "./CheckPlayerRole";
import Dialog from "@mui/material/Dialog";
import Modal from "components/Items/Modal";
import ButtonModal from "components/Items/ButtonModal";

const RemovePlayer = dynamic(() => import("../Forms/RemovePlayer"));
const EditPlayer = dynamic(() => import("../Forms/EditPlayer"));

const CheckTeamPlayers = ({ teamID, teamName }) => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editPlayerId, setEditPlayerId] = useState(null);
  const [removePlayerId, setRemovePlayerId] = useState(null);

  const handleEditModal = (playerId) => {
    setEditPlayerId(playerId);
  };
  const handleCloseEditModal = () => {
    setEditPlayerId(null);
  };

  const handleRemoveModal = (playerId) => () => {
    setRemovePlayerId(playerId);
  };
  const handleCloseRemoveModal = () => {
    setRemovePlayerId(null);
  };

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
              <div className="flex-row flex gap-3">
                <ButtonModal
                  click={() => handleEditModal(player.id)}
                  text={"Edit"}
                />
                <Dialog
                  open={editPlayerId === player.id}
                  onClose={handleCloseEditModal}
                  PaperProps={{
                    style: { backgroundColor: "#18181b", borderRadius: "0" },
                  }}
                >
                  <Modal
                    form={
                      <EditPlayer
                        playerID={player.id}
                        playerName={player.name}
                        playerRole={player.role}
                        playerRoleState={player.role_state}
                        teamID={teamID}
                        teamName={teamName}
                      />
                    }
                    handleClose={handleCloseEditModal}
                  />
                </Dialog>
                <ButtonModal
                  click={handleRemoveModal(player.id)}
                  text={"Remove"}
                />
                <Dialog
                  open={removePlayerId === player.id}
                  onClose={handleCloseRemoveModal}
                  PaperProps={{
                    style: { backgroundColor: "#18181b", borderRadius: "0" },
                  }}
                >
                  <Modal
                    form={
                      <RemovePlayer
                        playerName={player.name}
                        playerID={player.id}
                        teamName={teamName}
                        handleCloseRemoveModal={handleCloseRemoveModal}
                      />
                    }
                    handleClose={handleCloseRemoveModal}
                  />
                </Dialog>
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
