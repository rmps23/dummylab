import { useState } from "react";
import { FetchPlayers } from "@components/Dashboard/Players/Functions/FetchPlayers";
import CircularLoading from "@components/UI/CircularLoading";
import CheckPool from "./CheckPool";
import EditPool from "../Forms/ChampionPool/EditPool";
import Modal from "@components/UI/Modal";

const PlayerPoolBar = ({ teamID }) => {
  const [updatePool, setUpdatePool] = useState();

  const { players, playersLoading, playersError } = FetchPlayers(teamID);

  if (playersError) return <h1>{JSON.stringify(playersError)}</h1>;

  if (playersLoading)
    return (
      <div className="bg-zinc-950 p-5 pt-8 relative rounded-md flex items-center justify-center">
        <CircularLoading size={40} color={"text-teal-600"} />
      </div>
    );

  return (
    <>
      {players && players.length > 0 && (
        <div className="grid-cols-1 md:grid-cols-2 grid gap-4 md:gap-8">
          {players.map((player) => {
            return (
              <div
                className="bg-zinc-950 p-3 relative rounded-md"
                key={player.id}
              >
                <div className="flex justify-between">
                  <div>
                    <span className="uppercase text-teal-500 text-sm">
                      {player.name}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs uppercase text-zinc-400">
                      {player.role.name}
                    </span>
                    <img
                      src={player.role.image_link}
                      width={20}
                      className="opacity-60"
                    />
                    <Modal
                      btn="Edit"
                      icon={""}
                      classes="bg-teal-700 px-4 py-2 leading-none text-[11px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300 cursor-pointer"
                      form={
                        <EditPool
                          playerID={player.id}
                          updatePool={updatePool}
                          setUpdatePool={setUpdatePool}
                        />
                      }
                      title={`Edit ${player.name} Champion Pool`}
                    />
                  </div>
                </div>
                <CheckPool playerID={player.id} updatePool={updatePool} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PlayerPoolBar;
