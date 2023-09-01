"use client";

import { useState, useEffect } from "react";

export default function Players() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://127.0.0.1:2999/liveclientdata/allgamedata"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
