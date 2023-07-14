import React from "react";
import { useEffect, useState } from "react";
import { FetchPool } from "./Functions/FetchPool";
import CircularLoading from "@components/UI/CircularLoading";
import DisplayPool from "./DisplayPool";

const CheckPool = ({ playerID, updatePool }) => {
  const [champions, setChampions] = useState();

  const { pool, poolLoading, poolError } = FetchPool(playerID, updatePool);

  useEffect(() => {
    if (pool) {
      let champions = pool.map((obj) => obj.champion);
      setChampions(champions);
    }
  }, [pool]);

  if (poolError) return <h1>{JSON.stringify(playersError)}</h1>;

  if (poolLoading)
    return (
      <div className="flex w-full py-4 items-center justify-center">
        <CircularLoading size={40} color={"text-teal-600"} />
      </div>
    );

  return (
    <>
      {champions && champions.length > 0 ? (
        <div className="mt-3 bg-zinc-900/40 rounded-md grid grid-cols-6 sm:grid-cols-8 md:grid-cols-7 lg:grid-cols-8 gap-2 p-2 min-h-[80px]">
          {champions.map((champ, index) => {
            return (
              <DisplayPool
                key={index}
                champID={champ.id}
                name={champ.name}
                image={champ.image}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-20 mt-3 bg-zinc-900/40 rounded-md p-2">
          <div className="h-full w-16 border border-teal-600 rounded-md items-center flex">
            <span className="flex m-auto text-2xl font-light text-zinc-400">
              ?
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckPool;
