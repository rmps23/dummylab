import { FetchUserTeams } from "@components/Dashboard/Team/Functions/FetchUserTeams";
import CircularLoading from "@components/UI/CircularLoading";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

const DisplayTeams = ({ checkNew }) => {
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
  }, [checkNew]);

  return (
    <div className="mt-5">
      {loading ? (
        <CircularLoading />
      ) : userTeams && userTeams.length > 0 ? (
        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid gap-6">
          {userTeams.map((team) => (
            <a
              href={`/dashboard/team/players/${team.name.replace(/\s/g, "_")}/${
                team.id
              }`}
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
                  className="absolute opacity-10 -right-5 top-3 group-hover:opacity-50 transition-all duration-300 group-hover:-right-40 delay-100"
                />
                <span className="absolute -right-40 top-8 group-hover:right-3 transition-all duration-500 ">
                  <FaChevronRight className="text-6xl text-teal-600 animate-pulse" />
                </span>
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
