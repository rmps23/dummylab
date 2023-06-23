import { FetchUserTeams } from "@components/Dashboard/Team/Functions/FetchUserTeams";
import CircularLoading from "@components/UI/CircularLoading";
import { useState, useEffect } from "react";

const DisplayTeams = () => {
  const [userTeams, setUserTeams] = useState([]);
  const [teamIMG, setTeamIMG] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchUserTeams()
      .then((value) => {
        setUserTeams(value);
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
      ) : userTeams && userTeams.length > 0 ? (
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-6">
          {userTeams.map((team) => (
            <a
              href={`/dashboard/team/${team.name.replace(/\s/g, "_")}/${
                team.id
              }`}
              key={team.id}
              className="relative overflow-hidden rounded-md"
            >
              <img
                src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${team.id}`}
                width={150}
                alt=""
                className="absolute -right-6 -top-0"
              />
              <div className="bg-zinc-950 opacity-90 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 relative h-28 hover:bg-opacity-60 transition ease-in-out duration-300">
                <p className="text-sm text-teal-500 uppercase font-normal flex">
                  {team.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p>There are no teams created.</p>
      )}
    </div>
  );
};

export default DisplayTeams;
