import { FetchPlayers } from "@components/Dashboard/Players/Functions/FetchPlayers";
import CircularLoading from "@components/UI/CircularLoading";
import { useState, useEffect } from "react";
import ModalUI from "@components/UI/ModalUI";
import EditPlayer from "../Forms/Player/EditPlayer";
import RemovePlayer from "../Forms/Player/RemovePlayer";

const DisplayTeams = ({ teamID, teamName }) => {
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
    <div className="mt-5">
      {loading ? (
        <CircularLoading />
      ) : players && players.length > 0 ? (
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-6">
          {players.map((player) => {
            return (
              <div
                className="relative overflow-hidden rounded-md"
                key={player.id}
              >
                <img
                  src={player.role.image_link}
                  alt=""
                  width={60}
                  height={60}
                  className={`absolute right-2 bottom-3 ${
                    player.role_state.id === 2 && "filter grayscale"
                  }`}
                />
                <div className="bg-zinc-950 opacity-80 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 relative h-28 ">
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
                  <div className="pt-7 flex gap-2">
                    <ModalUI
                      btn="Edit"
                      classes="bg-teal-700 px-4 py-2 leading-none text-[11px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300"
                      form={
                        <EditPlayer
                          playerID={player.id}
                          playerName={player.name}
                          playerRole={player.role.id}
                          playerRoleState={player.role_state.id}
                          teamID={teamID}
                          teamName={teamName}
                        />
                      }
                      title={`Edit ${player.name}`}
                    />
                    <ModalUI
                      btn="Remove"
                      classes="bg-teal-700 px-4 py-2 leading-none text-[11px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300"
                      form={
                        <RemovePlayer
                          playerID={player.id}
                          playerName={player.name}
                          playerRole={player.role.id}
                          playerRoleState={player.role_state.id}
                          teamID={teamID}
                          teamName={player.team.name}
                        />
                      }
                      title={`Remove ${player.name}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>There are no teams created.</p>
      )}
    </div>
  );
};

export default DisplayTeams;
