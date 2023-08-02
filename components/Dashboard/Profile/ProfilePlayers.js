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
      <div className="h-full relative group">
        <div className="relative rounded-md items-center flex gap-2 justify-between mb-2 bg-zinc-950 p-4 shadow-md shadow-zinc-950/30">
          <span className="text-xl uppercase text-zinc-200 font-light">
            Total Players
          </span>
          <span className="text-2xl bg-zinc-900 text-teal-500 w-12 h-12 items-center justify-center flex rounded-md">
            <CircularLoading color={"text-teal-400"} size={18} />
          </span>
        </div>

        <div>
          <div className="rounded-md bg-zinc-950 p-4">
            <span className="text-md uppercase text-zinc-200 font-light flex w-full">
              Main Players
            </span>
            <div className="flex items-center justify-center pt-10">
              <CircularLoading color={"text-zinc-500"} size={25} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (playersError) return <h1>{JSON.stringify(playersErrorLength)}</h1>;

  return (
    <div className="h-full relative group">
      <div className="relative rounded-md items-center flex gap-2 justify-between mb-4 bg-zinc-950 p-4 shadow-md shadow-zinc-950/30">
        <span className="text-xl text-zinc-300">Total Players</span>
        <span className="text-2xl bg-zinc-900 text-teal-500 w-12 h-12 items-center justify-center flex rounded-md">
          {players.length}
        </span>
      </div>

      <div>
        <div className="rounded-md bg-zinc-950 p-4">
          <span className="text-md  text-zinc-300 font-light flex">
            Main Players
          </span>
          {players.length > 0 ? (
            <>
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
                        <span className="pt-[2px] text-zinc-400 text-[12px]">
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
            </>
          ) : (
            <>Nop</>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePlayers;
