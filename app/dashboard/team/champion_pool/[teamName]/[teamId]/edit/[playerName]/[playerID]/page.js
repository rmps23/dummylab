"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../../../../../../../../supabase";

import CircularProgress from "@mui/material/CircularProgress";
import TopBar from "components/TopBar/TopBar";
import TeamName from "components/Dashboard/Team/TeamName";
import ChampSearch from "components/Dashboard/ChampionPool/ChampSearch";

export default function EditPool() {
  const params = useParams();
  const [teamName, setTeamName] = useState();
  const [playerName, setPlayerName] = useState();
  const [teamID, setTeamID] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [poolFetched, setPoolFetched] = useState([]);
  const [playerPool, setPlayerPool] = useState([]);

  useEffect(() => {
    setPlayerName(params.playerName);
    setTeamName(params.teamName);
    setTeamID(params.teamId);

    const fetchData = async () => {
      try {
        const { data: poolData, error: poolError } = await supabase
          .from("champion_pool")
          .select("champ_pool")
          .eq("id", params.playerID);

        if (poolError) {
          throw poolError;
        }

        let explodedArray = "";

        if (poolData[0].champ_pool) {
          explodedArray = poolData[0].champ_pool.split(";");
          let champArray = poolData[0].champ_pool
            .split(";")
            .map((champ) => ({ name: champ }));
          setPlayerPool(champArray);
        }

        let pool = explodedArray;

        const response = await fetch(
          "http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json"
        );
        const data = await response.json();
        const champsToRemove = pool;
        const filteredChampions = Object.values(data.data).filter(
          (champion) => !champsToRemove.includes(champion.name)
        );
        setPoolFetched(filteredChampions);
      } catch (poolError) {
        console.error("Error fetching data:", poolError.message);
      }
    };

    fetchData();

    setIsLoading(false);
  }, []);

  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-auto py-5 px-2">
        <div className="max-w-7xl mx-auto py-4 px-2">
          {isLoading ? (
            <CircularProgress
              size={20}
              className="text-teal-500"
              color="inherit"
            />
          ) : (
            <>
              <TeamName teamName={playerName} />
              <div className="backdrop-filter backdrop-blur-sm backdrop-opacity-50 bg-opacity-60 shadow-md shadow-zinc-950 bg-zinc-950 rounded-md p-4">
                <ChampSearch
                  poolFetched={poolFetched}
                  playerPool={playerPool}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
