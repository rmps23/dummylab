import { useEffect, useState } from "react";
import { FetchPlayers } from "@components/Dashboard/Players/Functions/FetchPlayers";
import CircularLoading from "@components/UI/CircularLoading";
import ModalUI from "@components/UI/ModalUI";
import CheckPool from "./CheckPool";
import EditPool from "../Forms/ChampionPool/EditPool";

const PlayerPoolBar = ({ teamID }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchPlayers(teamID)
      .then((value) => {
        setPlayers(value);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <CircularLoading />
      ) : (
        <>
          {players && players.length > 0 ? (
            <div className="grid-cols-1 md:grid-cols-2 grid gap-4">
              {players.map((player) => {
                return (
                  <div
                    className="bg-zinc-950 opacity-80 bg-opacity-90 backdrop-filter backdrop-blur-lg p-3 relative rounded-md"
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
                        <ModalUI
                          btn="Edit Pool"
                          classes="bg-teal-700 px-4 py-2 leading-none text-[11px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300"
                          form={<EditPool playerID={player.id} />}
                          title={`Edit ${player.name} Champion Pool`}
                        />
                      </div>
                    </div>
                    <CheckPool playerID={player.id} />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>There are no teams created.</p>
          )}
        </>
      )}
    </>
  );
};

export default PlayerPoolBar;
