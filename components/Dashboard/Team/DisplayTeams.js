import { FetchUserTeams } from "./Function/FetchUserTeams";
import { RxCaretRight } from "react-icons/rx";

import CircularLoading from "@components/UI/CircularLoading";
import useTeamStore from "@components/Store/teamStore";
import { useEffect } from "react";
import { FaShieldAlt } from "react-icons/fa";

const DisplayTeams = () => {
  const { userTeams, userTeamsLoading, userTeamsError } = FetchUserTeams();
  const setData = useTeamStore((state) => state.setData);
  const teams = useTeamStore((state) => state.data);

  useEffect(() => {
    if (userTeams) {
      setData(userTeams);
    }
  }, [userTeams, setData]);

  if (userTeamsError) return <h1>{JSON.stringify(error)}</h1>;

  if (userTeamsLoading)
    return (
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-6">
        <div className="bg-zinc-950/50 p-5 relative h-32 hover:bg-opacity-60 rounded-md flex items-center justify-center">
          <CircularLoading size={40} color={"text-zinc-800"} />
        </div>
      </div>
    );

  return (
    <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-6">
      {!teams.length > 0 ? (
        <div className="flex py-5 px-4 col-span-4 bg-zinc-950 rounded-md">
          <span className="text-zinc-400">No teams have been created.</span>
        </div>
      ) : (
        teams.map((team) => (
          <a
            href={`/dashboard/team/${team.name}/${team.id}`}
            key={team.id}
            className={`relative overflow-hidden rounded-md transition-all duration-200 ease-in-out group border border-zinc-800/50`}
          >
            <span
              className="absolute -right-10 bottom-0 h-24 w-40 blur-2xl group-hover:-right-400 transition-all duration-300 rounded-full opacity-50 group-hover:opacity-100"
              style={{ backgroundColor: team.color }}
            ></span>
            <div
              className={`bg-zinc-950/90 group-hover:bg-zinc-950/70 transition-all duration-500 backdrop-blur-md p-6 relative h-32 flex items-center ease-in-out text-left `}
            >
              <div className="flex flex-col">
                <p
                  className="text-md uppercase mb-1 truncate block opacity-50 group-hover:opacity-80 transition-all duration-300"
                  style={{ color: team.color }}
                >
                  {team.name}
                </p>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-300 uppercase block transition-all duration-500">
                  {team.league ? team.league : "N/A"}
                </p>
              </div>

              <span className="absolute -right-40 top-13 group-hover:right-0 transition-all duration-300">
                <RxCaretRight className="text-8xl text-zinc-300" />
              </span>
            </div>
          </a>
        ))
      )}
    </div>
  );
};

export default DisplayTeams;
