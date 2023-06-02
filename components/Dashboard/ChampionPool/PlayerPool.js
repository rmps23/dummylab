import React from "react";
import { supabase } from "../../../supabase";
import { useEffect, useState } from "react";

const PlayerPool = ({ playerID }) => {
  const [pool, setPool] = useState("");
  const [poolFetched, setPoolFetched] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: poolData, error: poolError } = await supabase
          .from("champion_pool")
          .select("*")
          .eq("id", playerID);

        if (poolError) {
          throw poolError;
        }

        let explodedArray = "";

        console.log(poolData[0]);

        // if (poolData[0]) {
        //   explodedArray = poolData[0].champ_pool.split(";");
        // }

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

  return (
    <>
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
        {poolFetched && poolFetched.length > 0 ? (
          <>
            {poolFetched.map((champ, index) => {
              {
                return (
                  <div
                    key={index}
                    className="bg-zinc-900 rounded-tr-xl rounded-bl-xl border border-teal-500/20 items-center justify-center flex flex-col w-full relative overflow-hidden my-4 group"
                  >
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${champ.image.full}`}
                      alt=""
                      height={100}
                      width={100}
                      className="scale-110 blur-0 group-hover:blur-sm group-hover:opacity-20 transition ease-in-out duration-300"
                    />
                    <span className="absolute text-teal-500 left-0 right-0 text-center text-sm uppercase font-light py-1 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 items-center cursor-default">
                      {champ.name}
                    </span>
                  </div>
                );
              }
            })}
          </>
        ) : (
          <div className="bg-zinc-900 rounded-tr-xl rounded-bl-xl border border-teal-500/20 items-center justify-center flex flex-col w-full relative overflow-hidden my-4">
            <img
              alt=""
              height={100}
              width={100}
              className="scale-110 blur-0 group-hover:blur-sm group-hover:opacity-20 transition ease-in-out duration-300"
            />
            <span className="absolute text-teal-500 left-0 right-0 text-center text-sm font-light py-1 items-center cursor-default">
              None
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default PlayerPool;
