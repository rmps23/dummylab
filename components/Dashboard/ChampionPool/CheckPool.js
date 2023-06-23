import React from "react";
import { useEffect, useState } from "react";
import { FetchPool } from "./Functions/FetchPool";
import CircularLoading from "@components/UI/CircularLoading";
import DisplayPool from "./DisplayPool";

const CheckPool = (playerID) => {
  const [pool, setPool] = useState([]);
  const [champions, setChampions] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchPool(playerID.playerID)
      .then((value) => {
        setPool(value);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let champions = pool.map((obj) => obj.champion);
    setChampions(champions);
  }, [pool]);

  return (
    <>
      {loading ? (
        <CircularLoading />
      ) : (
        <>
          {champions && champions.length > 0 ? (
            <div className="mt-3 bg-zinc-900/40 rounded-md grid grid-cols-6 sm:grid-cols-8 md:grid-cols-7 lg:grid-cols-8 gap-2 p-2">
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
      )}
    </>
  );
};

export default CheckPool;
