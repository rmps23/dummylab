import React from "react";
import { useState, useEffect } from "react";

const ChampSearch = () => {
  const [champName, setChampName] = useState("");
  const [viewBox, setViewBox] = useState(false);
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [champions, setChampions] = useState([]);

  const handleChange = (value) => {
    setChampName(value);
    if (value.length > 0) {
      setViewBox(true);

      const fetchData = async () => {
        try {
          const response = await fetch(
            "http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json"
          );
          const data = await response.json();

          const lowercaseChampName = value.toLowerCase();
          const filteredChampions = Object.values(data.data).filter(
            (champion) => champion.id.toLowerCase().includes(lowercaseChampName)
          );
          setFilteredChampions(filteredChampions);
          setChampions(data.data);
        } catch (error) {
          console.error("Error fetching champion data:", error);
        }
      };
      fetchData();
    } else {
      setViewBox(false);
      setFilteredChampions([]);
    }
  };

  return (
    <div className="w-auto relative ">
      <input
        type="text"
        value={champName}
        onChange={(e) => handleChange(e.target.value)}
        className="bg-zinc-900 p-2 outline-none text-zinc-200 focus:border-teal-500 transition ease-in-out duration-200 rounded-md border-b-2 border-teal-500/20"
        placeholder="Insert champion name..."
      />

      {viewBox && (
        <div className="bg-zinc-800 h-36 absolute top-6 left-0 right-0 overflow-y-auto rounded-md pt-4 -z-10">
          {filteredChampions.map((champ) => (
            <p key={champ.id} className="text-white capitalize p-1">
              {champ.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChampSearch;
