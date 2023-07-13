import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchProfilePlayers } from "./Functions/FetchProfilePlayers";
import CircularLoading from "@components/UI/CircularLoading";

const ProfilePlayers = () => {
  const params = useParams();
  const teamID = params.teamId;

  const { playersLength, playersLoadingLength, playersErrorLength } =
    FetchProfilePlayers(teamID);

  if (playersLoadingLength)
    return (
      <div className="bg-zinc-950 text-zinc-300 p-4 px-10 relative h-32 rounded-md items-center flex gap-2 justify-between">
        <span className="text-3xl uppercase text-teal-500 font-light">
          Players
        </span>
        <span className="text-4xl bg-teal-700 w-20 h-20 items-center justify-center flex rounded-full pt-2">
          <CircularLoading color={"text-zinc-800"} />
        </span>
      </div>
    );

  if (playersErrorLength) return <h1>{JSON.stringify(playersErrorLength)}</h1>;

  return (
    <div>
      <div className="bg-zinc-950 text-zinc-300 p-4 px-10 relative h-32 rounded-md items-center flex gap-2 justify-between">
        <span className="text-3xl uppercase text-teal-500 font-light">
          Players
        </span>
        <span className="text-4xl bg-teal-700 w-20 h-20 items-center justify-center flex rounded-full">
          {playersLength}
        </span>
      </div>
    </div>
  );
};

export default ProfilePlayers;
