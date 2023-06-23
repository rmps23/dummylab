import React from "react";
import { FetchTeamData } from "@components/Dashboard/Team/Functions/FetchTeamData";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CircularLoading from "@components/UI/CircularLoading";

const TeamName = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);
    FetchTeamData(params.teamId)
      .then((value) => {
        setTeamData(value);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="relative overflow-hidden rounded-md mb-6">
          <div className="bg-zinc-950 opacity-90 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 px-6 relative h-14 text-right items-center flex">
            <CircularLoading />
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-md mb-6">
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
      )}
    </>
  );
};

export default TeamName;
