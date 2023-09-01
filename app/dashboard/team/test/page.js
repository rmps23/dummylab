"use client";

import { useState, useEffect } from "react";

export default function Players() {
  const [data, setData] = useState(null);
  const [stop, setStop] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://127.0.0.1:2999/liveclientdata/allgamedata"
      );
      if (!response.ok) {
        // Handle non-okay responses here
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();

      console.log(jsonData);

      setData(jsonData);
    } catch (error) {
      //   console.error("Error fetching data:", error);
      setStop(true); // Set stop to true on a failed response
    }
  };

  useEffect(() => {
    if (!stop) {
      fetchData();

      const intervalId = setInterval(fetchData, 2000);
      return () => clearInterval(intervalId);
    }
  }, [stop]); // Include 'stop' as a dependency for useEffect

  return (
    <div>
      {data.activePlayer.summonerName}
      <br />
      {data.activePlayer.currentGold}
      <br />
      {data.gameData.gameTime}
    </div>
  );
}
