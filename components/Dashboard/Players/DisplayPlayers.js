import { useEffect } from "react";
import { FetchPlayers } from "./Functions/FetchPlayers";

import EditPlayer from "../Forms/Player/EditPlayer";
import RemovePlayer from "../Forms/Player/RemovePlayer";
import usePlayerStore from "@components/Store/playerStore";
import Modal from "@components/UI/Modal";
import CircularLoading from "@components/UI/CircularLoading";

const DisplayTeams = ({ teamID, teamName, closeModal, setCloseModal }) => {
  const { players, playersLoading, playersError } = FetchPlayers(teamID);
  const setData = usePlayerStore((state) => state.setData);
  const playersStore = usePlayerStore((state) => state.data);

  useEffect(() => {
    if (players) {
      setData(players);
    }
  }, [players, setData]);

  if (playersError) return <h1>{JSON.stringify(playersError)}</h1>;

  if (playersLoading)
    return (
      <div className="mt-5">
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-6">
          <div className="bg-zinc-950/50 opacity-80 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 relative h-32 rounded-md flex items-center justify-center">
            <CircularLoading size={40} color={"text-zinc-800"} />
          </div>
        </div>
      </div>
    );

  return (
    <div className="mt-5">
      {playersStore.length > 0 ? (
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid gap-4 w-full">
          {playersStore.map((player) => {
            return (
              <div
                className="relative overflow-hidden rounded-md"
                key={player.id}
              >
                <div className="bg-zinc-950 p-4 relative h-32">
                  <div className="flex flex-row justify-between">
                    <p className="text-sm text-zinc-300 uppercase">
                      {player.name}
                    </p>
                    <p className="text-xs text-teal-600 uppercase">
                      <span className="text-zinc-300 mr-2 text-[10px]">
                        {player.role_state.name}
                      </span>
                      {player.role.name}
                    </p>
                  </div>
                  <div className="pt-11 flex gap-2">
                    <Modal
                      btn="Edit"
                      icon={""}
                      classes="bg-teal-700 px-4 py-2 leading-none text-[12px] rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300 cursor-pointer"
                      form={
                        <EditPlayer
                          playerID={player.id}
                          playerName={player.name}
                          playerRole={player.role.id}
                          playerRoleState={player.role_state.id}
                          teamID={teamID}
                          teamName={teamName}
                          closeModal={closeModal}
                          setCloseModal={setCloseModal}
                        />
                      }
                      title={`Edit ${player.name}`}
                      closeModal={closeModal}
                      setCloseModal={setCloseModal}
                    />

                    <Modal
                      btn="Remove"
                      icon={""}
                      classes="bg-teal-700 px-4 py-2 leading-none text-[12px] rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300 cursor-pointer"
                      form={
                        <RemovePlayer
                          playerID={player.id}
                          playerName={player.name}
                          playerRole={player.role.id}
                          playerRoleState={player.role_state.id}
                          teamID={teamID}
                          teamName={player.team.name}
                          closeModal={closeModal}
                          setCloseModal={setCloseModal}
                        />
                      }
                      title={`Remove ${player.name}`}
                      closeModal={closeModal}
                      setCloseModal={setCloseModal}
                    />

                    <img
                      src={player.role.image_link}
                      alt=""
                      width={40}
                      height={40}
                      className={`absolute right-2 bottom-3 ${
                        player.role_state.id === 2 && "filter grayscale"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-zinc-950 p-5 rounded-md">
          <p className="text-md text-zinc-400">
            No players have been created yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayTeams;
