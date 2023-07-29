import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchProfilePlayers } from "./Functions/FetchProfilePlayers";
import CircularLoading from "@components/UI/CircularLoading";
import Image from "next/image";

const ProfilePlayers = () => {
  const params = useParams();
  const teamID = params.teamId;

  const { players, playersLoading, playersError } = FetchProfilePlayers(teamID);

  if (playersLoading) {
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
  }

  if (playersError) return <h1>{JSON.stringify(playersErrorLength)}</h1>;

  return (
    <div className="h-full relative group">
      <div className="relative rounded-md items-center flex gap-2 justify-between mb-2 bg-zinc-950 p-4 shadow-md shadow-zinc-950/30">
        <span className="text-xl uppercase text-teal-500 font-light">
          Total Players
        </span>
        <span className="text-2xl bg-zinc-900 text-teal-500 w-12 h-12 items-center justify-center flex rounded-md">
          {players.length}
        </span>
      </div>

      <div>
        <div className="rounded-md bg-zinc-950 p-4">
          <span className="text-md uppercase text-teal-500 font-light flex">
            Main Players
          </span>
          {players.map(
            (player) =>
              player.role_state.id === 1 && (
                <div
                  className="uppercase text-teal-400 p-2 mt-2 text-sm flex items-center bg-zinc-900 rounded-md hover:bg-zinc-800 transition-all duration-200 justify-between"
                  key={player.id}
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src={player.role.image_link}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className="pt-[2px] text-teal-500 text-[12px]">
                      {player.name}
                    </span>
                  </div>
                  <div>
                    <span className="pt-[2px] text-zinc-400 float-right text-[12px]">
                      {player.role.name}
                    </span>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePlayers;
