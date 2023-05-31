import React from "react";
import { supabase } from "../../../supabase";
import { useEffect, useState } from "react";

const PlayerPool = ({ playerID }) => {
  const [pool, setPool] = useState("");

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

        setPool(explodedArray);
      } catch (poolError) {
        console.error("Error fetching data:", poolError.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {pool && pool.length > 0 ? (
        <>
          {pool.map((champ, index) => {
            {
              return <p key={index}>{champ}</p>;
            }
          })}
        </>
      ) : (
        <p>No champs selected</p>
      )}
    </div>
  );
};

export default PlayerPool;
