import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchProfilePlayers } from "./Functions/FetchProfilePlayers";
import CircularLoading from "@components/UI/CircularLoading";

const ProfilePlayers = () => {
  const params = useParams();
  const teamID = params.teamId;
  const [count, setCount] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    FetchProfilePlayers(teamID)
      .then((value) => {
        setCount(value);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <CircularLoading />
      ) : (
        <div className="bg-zinc-950 text-zinc-300 opacity-80 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 px-10 relative h-28 rounded-md items-center flex gap-2 justify-between">
          <span className="text-3xl">Players</span>
          <span className="text-6xl bg-zinc-900 w-20 h-20 items-center justify-center flex rounded-full">
            {count}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfilePlayers;
