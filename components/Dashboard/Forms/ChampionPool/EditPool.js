import { useEffect, useState } from "react";
import { FetchChampions } from "@components/Dashboard/ChampionPool/Functions/FetchChampions";
import { FetchPool } from "@components/Dashboard/ChampionPool/Functions/FetchPool";
import CircularLoading from "@components/UI/CircularLoading";
import { supabase } from "@supabase";
import Image from "next/image";

const EditPool = ({ playerID, updatePool, setUpdatePool }) => {
  const { pool, poolLoading, poolError } = FetchPool(playerID);

  const [champions, setChampions] = useState([]);
  const [playerPool, setPlayerPool] = useState([]);
  const [restChamps, setRestChamps] = useState([]);
  const [loadingChampions, setLoadingChampions] = useState(false);
  const [loadingPlayerPool, setLoadingPlayerPool] = useState(false);

  useEffect(() => {
    setLoadingChampions(true);
    setLoadingPlayerPool(true);

    FetchChampions()
      .then((value) => {
        setChampions(value);
        setLoadingChampions(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingChampions(false);
      });

    setPlayerPool(pool);
    setLoadingPlayerPool(false);
  }, [playerID]);

  useEffect(() => {
    setLoadingChampions(true);

    const restChamps = champions.filter((champion) => {
      return !playerPool.some((obj) => obj.champion.name === champion.name);
    });

    const restChampsSorted = [...restChamps].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });

    setRestChamps(restChampsSorted);
    setLoadingChampions(false);
  }, [champions, playerPool]);

  const removeChamp = async (champID, playerID) => {
    try {
      const updatedPlayerPool = playerPool.filter(
        (champion) => champion.champion.id !== champID
      );

      const { data, error } = await supabase
        .from("pool")
        .delete()
        .eq("champion_id", champID)
        .eq("player_id", playerID);

      if (error) {
        throw error;
      }

      setPlayerPool(updatedPlayerPool);
      setUpdatePool(updatedPlayerPool);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const addChamp = async (champ, playerID) => {
    try {
      const { data, error } = await supabase
        .from("pool")
        .insert({
          champion_id: champ.id,
          player_id: playerID,
        })
        .select("*, champion(id, name, image)");

      if (error) {
        throw error;
      }

      const updatedPlayerPool = [...playerPool, data[0]];
      setPlayerPool(updatedPlayerPool);
      setUpdatePool(updatedPlayerPool);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <>
      {loadingChampions || loadingPlayerPool ? (
        <CircularLoading />
      ) : (
        <>
          <p className="text-md uppercase font-light text-teal-500">
            Player Pool
          </p>
          {playerPool && playerPool.length > 0 ? (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-6 p-2 rounded-sm mb-6">
              {playerPool.map((champ) => {
                return (
                  <div
                    key={champ.champion.id}
                    className="overflow-hidden border border-teal-900 relative group mx-auto hover:scale-125 transition-all duration-200 rounded-md shadow-lg hover:shadow-teal-500/40"
                    onClick={(e) =>
                      removeChamp(champ.champion.id, champ.player_id)
                    }
                  >
                    <Image
                      src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${champ.champion.image}`}
                      alt=""
                      className="scale-110"
                      height={120}
                      width={120}
                      priority="true"
                    />

                    <span className="absolute z-50 bottom-0 left-0 right-0 text-center bg-zinc-900 text-[9px] uppercase text-teal-500">
                      {champ.champion.name}
                    </span>
                    <div className="absolute text-[10px] text-teal-500 z-50 left-0 right-0 top-0 bottom-0 items-center justify-center flex bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition ease-in-out duration-100 cursor-pointer bg-opacity-50 backdrop-filter backdrop-blur-sm">
                      <span className="uppercase">Remove</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {loadingPlayerPool ? (
                <CircularLoading />
              ) : (
                <p className="p-4 bg-zinc-900 backdrop-blur-md bg-opacity-80 my-4 rounded-md text-zinc-300">
                  This player has no champions in the pool.
                </p>
              )}
            </>
          )}
          <p className="text-md uppercase font-light text-teal-500">
            Champions
          </p>
          {restChamps && restChamps.length > 0 && (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-6 p-2 rounded-sm mb-16">
              {restChamps.map((champ) => {
                return (
                  <div
                    key={champ.id}
                    className="overflow-hidden border border-teal-600/70 relative group mx-auto hover:scale-125 transition-all duration-200 rounded-md shadow-lg hover:shadow-teal-500/40"
                    onClick={(e) => addChamp(champ, playerID)}
                  >
                    <Image
                      src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${champ.image}`}
                      alt=""
                      className="scale-110"
                      height={120}
                      width={120}
                      priority="true"
                    />
                    <span className="absolute z-50 bottom-0 left-0 right-0 text-center bg-zinc-900 text-[9px] uppercase text-teal-500">
                      {champ.name}
                    </span>
                    <div className="absolute text-[10px] text-teal-500 z-50 left-0 right-0 top-0 bottom-0 items-center justify-center flex bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition ease-in-out duration-100 cursor-pointer bg-opacity-50 backdrop-filter backdrop-blur-sm">
                      <span className="uppercase">Add</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default EditPool;
