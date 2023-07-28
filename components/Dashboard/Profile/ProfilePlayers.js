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
      <div>
        <img
          src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
          alt=""
          className="w-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:saturate-200 group-hover:scale-110 group-hover:opacity-30 group-hover:blur-sm"
        />
      </div>
      {/* <img
        src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
        alt=""
        className="h-full w-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:saturate-200 group-hover:scale-110 group-hover:opacity-30 group-hover:blur-sm"
      /> */}
      {/* <div className="relative rounded-md items-center flex gap-2 justify-between mb-4">
        <span className="text-xl uppercase text-teal-500 font-light">
          Total Players
        </span>
        <span className="text-2xl bg-teal-700 w-12 h-12 items-center justify-center flex rounded-md">
          {players.length}
        </span>
      </div>
      <div>
        {players.map(
          (player) =>
            player.role_state.id === 1 && (
              <div
                className="uppercase font-light text-teal-400 mb-2 text-sm flex items-center gap-2 bg-zinc-900 p-4 rounded-md hover:bg-zinc-800 transition-all duration-200 justify-between"
                key={player.id}
              >
                <div className="flex gap-2">
                  <Image
                    src={player.role.image_link}
                    width={20}
                    height={20}
                    alt=""
                  />
                  <span className="pt-[2px]">{player.name}</span>
                </div>
                <div>
                  <span className="pt-[2px] text-zinc-400 float-right">
                    {player.role.name}
                  </span>
                </div>
              </div>
            )
        )}
      </div> */}
    </div>
  );
};

export default ProfilePlayers;
