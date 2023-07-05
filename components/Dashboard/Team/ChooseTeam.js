import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FetchUserTeams } from "./Functions/FetchUserTeams";
import { FetchTeamData } from "./Functions/FetchTeamData";
import CircularLoading from "@components/UI/CircularLoading";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const ChooseTeam = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropDown] = useState(false);
  const [teamData, setTeamData] = useState([]);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    FetchUserTeams()
      .then((value) => {
        const filteredArray = value.filter((item) => item.id !== params.teamId);
        setTeams(filteredArray);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });

    FetchTeamData(params.teamId)
      .then((value) => {
        setTeamData(value);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const toggleDrop = () => {
    setDropDown(!dropdown);
  };

  return (
    <>
      <div className="flex flex-row-reverse sm:absolute top-4 right-4 relative ">
        <div
          className={`bg-zinc-950 p-3 h-12 text-xl flex items-center justify-center z-50 transition-all cursor-pointer ${
            dropdown === true ? "rounded-tr-md" : "rounded-r-md"
          }`}
          onClick={toggleDrop}
        >
          {dropdown === true ? (
            <FaAngleDown className="transition-all duration-500" />
          ) : (
            <FaAngleDown className="-rotate-180 transition-all duration-500" />
          )}
        </div>
        <div
          className={`bg-zinc-950 w-60 p-3 h-12 z-50 overflow-hidden relative transition-all cursor-pointer ${
            dropdown === true ? "rounded-tl-md" : "rounded-l-md"
          }`}
          onClick={toggleDrop}
        >
          <span>{params.teamName}</span>
          <img
            src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${params.teamId}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/dummylab-logo-w.png";
            }}
            width={50}
            alt=""
            className="absolute right-0 top-0 scale-125 opacity-30 group-hover:opacity-80 transition-all duration-500"
          />
        </div>
        <div
          className={`absolute left-0 right-0 top-12 z-10 transition-all duration-500 overflow-auto scroll-edit rounded-b-md ${
            dropdown === true ? "h-40" : "h-0 border-none"
          }`}
        >
          {teams && teams.length > 0 ? (
            <>
              {teams.map((team) => {
                return (
                  <Link
                    className="w-full py-2 flex items-center px-4 h-12 overflow-hidden relative group cursor-pointer bg-zinc-950 hover:bg-zinc-950/70"
                    key={team.id}
                    href={`/dashboard/team/players/${team.name.replace(
                      /\s/g,
                      "_"
                    )}/${team.id}`}
                  >
                    <img
                      src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${team.id}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/dummylab-logo-w.png";
                      }}
                      width={50}
                      className="scale-110 absolute right-0 -top-1 transition-all duration-300 opacity-25 group-hover:opacity-75 group-hover:scale-125"
                    />
                    <span>{team.name}</span>
                  </Link>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* {loading ? (
        <div className="relative overflow-hidden">
          <div className="bg-zinc-950 opacity-90 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 px-6 relative h-14 text-right items-center flex">
            <CircularLoading />
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-md mb-4">
          <img
            src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${params.teamId}`}
            width={150}
            alt=""
            className="absolute -top-4 right-0"
          />
          <div className="bg-zinc-950 opacity-90 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 px-6 relative h-14 text-right items-center flex">
            {teamData && teamData.length > 0 ? (
              <h1 className="text-teal-500 uppercase font-normal flex">
                {teamData[0].name}
              </h1>
            ) : (
              <></>
            )}
          </div>
        </div>
      )} */}
    </>
  );
};

export default ChooseTeam;
