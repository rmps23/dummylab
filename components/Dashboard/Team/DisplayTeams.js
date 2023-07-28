import { FetchUserTeams } from "./Function/FetchUserTeams";
import { FaChevronRight } from "react-icons/fa";

import CircularLoading from "@components/UI/CircularLoading";
import useTeamStore from "@components/Store/teamStore";
import { useEffect } from "react";

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
            href={`/dashboard/team/${team.name.replace(/\s/g, "+")}/${team.id}`}
            key={team.id}
            className="relative overflow-hidden rounded-md transition-all duration-300 ease-in-out hover:scale-105 group"
          >
            <div className="bg-zinc-950 p-5 relative h-32 hover:bg-opacity-60">
              <p className="text-md text-teal-500 flex uppercase">
                {team.name}
              </p>
              <img
                src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${team.id}`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummylab-logo-w.png";
                }}
                width={100}
                alt=""
                className="absolute opacity-50 -right-5 top-3 transition-all duration-300 group-hover:-right-40 delay-100"
              />
              <span className="absolute -right-40 top-8 group-hover:right-3 transition-all duration-500 ">
                <FaChevronRight className="text-6xl text-teal-600 animate-pulse" />
              </span>
            </div>
          </a>
        ))
      )}
    </div>
  );
};

export default DisplayTeams;
