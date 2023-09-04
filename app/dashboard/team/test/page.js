"use client";

import { useState, useEffect } from "react";

export default function Players() {
  const [data, setData] = useState(null);
  const [stop, setStop] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://static.developer.riotgames.com/docs/lol/liveclientdata_sample.json"
      );

      // https://static.developer.riotgames.com/docs/lol/liveclientdata_sample.json
      // https://127.0.0.1:2999/liveclientdata/allgamedata

      const jsonData = await response.json();

      setData(jsonData);
    } catch (error) {
      setStop(true);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {data && (
        <>
          Summoner Name: {data.activePlayer.summonerName}
          <br />
          Current Gold: {data.activePlayer.currentGold}
          <br />
          Time: {data.gameData.gameTime}
          {Math.floor(data.gameData.gameTime) == 400 && (
            <>
              Summoner Name: {data.activePlayer.summonerName}
              <br />
              Current Gold: {data.activePlayer.currentGold}
              <br />
              Time: {Math.floor(data.gameData.gameTime)}
            </>
          )}
        </>
      )}
    </div>
  );
}
