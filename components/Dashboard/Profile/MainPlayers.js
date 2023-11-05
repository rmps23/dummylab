import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchProfilePlayers } from "./Functions/FetchProfilePlayers";
import CircularLoading from "@components/UI/CircularLoading";
import Image from "next/image";
import ShareLink from "@components/Dashboard/Profile/ShareLink";

const MainPlayers = () => {
  const params = useParams();
  const teamID = params.teamId;

  const { players, playersLoading, playersError } = FetchProfilePlayers(teamID);

  if (playersLoading) {
    return (
      <div className="h-full relative group">
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
    <div>
      <div>
        <div className="rounded-md bg-zinc-950 p-6">
          <span className="text-md text-zinc-300 pb-4 justify-center flex uppercase">
            Main Players
          </span>
          {players.length > 0 ? (
            <>
              {players.map(
                (player) =>
                  player.role_state.id === 1 && (
                    <div
                      className="uppercase text-teal-400 py-2 text-sm flex items-center transition-all duration-200 justify-between"
                      key={player.id}
                    >
                      <div className="flex gap-4 items-center">
                        <Image
                          src={player.role.image_link}
                          width={50}
                          height={20}
                          alt=""
                          className="bg-zinc-900 p-2 rounded-md"
                        />
                        <span className="text-zinc-400 text-lg">
                          {player.name}
                        </span>
                      </div>
                      {/* <div>
                        <span className="pt-[2px] text-zinc-400 float-right text-[12px]">
                          {player.role.name}
                        </span>
                      </div> */}
                    </div>
                  )
              )}
            </>
          ) : (
            <>
              <div className="text-center">
                <p className="font-light text-zinc-300">
                  There are no registered players.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPlayers;
