import React from "react";
import { supabase } from "../../../supabase";
import { useEffect, useState } from "react";
import { RxValueNone } from "react-icons/rx";

const PlayerPool = ({ playerID }) => {
  const [pool, setPool] = useState("");
  const [poolFetched, setPoolFetched] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: poolData, error: poolError } = await supabase
          .from("champion_pool")
          .select("champ_pool")
          .eq("id", playerID);

        if (poolError) {
          throw poolError;
        }

        let explodedArray = "";

        if (poolData[0].champ_pool) {
          explodedArray = poolData[0].champ_pool.split(";");
        }

        let pool = explodedArray;

        const response = await fetch(
          "http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json"
        );
        const data = await response.json();
        const championsToGrab = pool;
        const filteredChampions = Object.values(data.data).filter((champion) =>
          championsToGrab.includes(champion.name)
        );
        setPoolFetched(filteredChampions);
      } catch (poolError) {
        console.error("Error fetching data:", poolError.message);
      }
    };

    fetchData();
  }, []);

  console.log(poolFetched);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-12 gap-2">
        {poolFetched && poolFetched.length > 0 ? (
          <>
            {poolFetched.map((champ, index) => {
              {
                return (
                  <div
                    className="bg-teal-400/50 p-1 rounded-tr-md rounded-bl-md my-4"
                    key={index}
                  >
                    <div className="bg-zinc-900 rounded-tr-md rounded-bl-md items-center justify-center flex flex-col w-full relative">
                      <img
                        src={`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${champ.image.full}`}
                        alt=""
                        height={100}
                        width={100}
                      />
                      <span className="absolute bg-zinc-900/80 left-0 right-0 bottom-0 text-center text-xs uppercase font-light py-1">
                        {champ.name}
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </>
        ) : (
          <div className="bg-teal-400/50 p-1 rounded-tr-md rounded-bl-md my-4">
            <div className="bg-zinc-900 rounded-tr-md rounded-bl-md h-14 items-center justify-center flex flex-col w-full">
              <span className="text-2xl">
                <RxValueNone></RxValueNone>
              </span>
              <span>None</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PlayerPool;
