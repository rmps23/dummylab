import { useEffect, useState } from "react";
import { FetchPool } from "@components/Dashboard/ChampionPool/Functions/FetchPool";

const EditPool = ({ playerID }) => {
  const [pool, setPool] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchPool(playerID)
      .then((value) => {
        let pool = value;
        pool = pool.map((champ) => champ.champion.name);

        const fetchChampionData = async () => {
          try {
            const response = await fetch(
              "http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json"
            );
            const data = await response.json();

            const championData = pool.map((champ) => {
              const champData = Object.values(data.data).find(
                (champion) => champion.name === champ
              );
              return champData;
            });
            console.log(championData);

            setLoading(false);
          } catch (error) {
            console.error(error);
          }
        };

        fetchChampionData();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* {newPool && newPool.length > 0 ? (
        <>
          <p>teste</p>
        </>
      ) : (
        <>
          <p>nao</p>
        </>
      )} */}
    </>
  );
};

export default EditPool;
