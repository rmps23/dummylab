import React from "react";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ChampSearch = ({ poolFetched, playerPool }) => {
  const [champName, setChampName] = useState("");
  const [viewBox, setViewBox] = useState(false);
  const [filteredChampions, setFilteredChampions] = useState([]);
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actualPool, setActualPool] = useState(playerPool);

  const handleChange = (value) => {
    setChampName(value);
    if (value.length > 0) {
      setViewBox(true);

      const fetchData = async () => {
        try {
          const data = poolFetched;

          const lowercaseChampName = value.toLowerCase();
          const filteredChampions = Object.values(poolFetched).filter(
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

  const removeText = () => {
    setChampName("");
    setViewBox(false);
    setFilteredChampions([]);
  };

  // useEffect(() => {
  //   setActualPool(playerPool);
  // }, []);

  const handleAddChamp = (champ) => {
    const newChampion = { name: champ };
    setActualPool((playerPool) => [...playerPool, newChampion]);
  };

  return (
    <>
      {loading ? (
        <div>
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : (
        <>
          {playerPool ? (
            <div className="grid grid-cols-12 gap-4">
              {playerPool.map((champ, index) => {
                return (
                  <div
                    key={index}
                    className="bg-zinc-900 rounded-tr-xl rounded-bl-xl border border-teal-500/20 items-center justify-center flex flex-col w-full relative overflow-hidden my-4 group"
                  >
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${champ.name}.png`}
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
              })}
            </div>
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
          <div className="w-full inline-block relative">
            <input
              type="text"
              value={champName}
              onChange={(e) => handleChange(e.target.value)}
              className="bg-zinc-900 p-2 outline-none text-zinc-200 focus:border-teal-500 transition ease-in-out duration-200 rounded-md border-b-2 border-teal-500/20 w-full mb-2"
              placeholder="Insert champion name..."
            ></input>
            <span
              className={`absolute right-3 top-2 cursor-pointer ${
                champName.length > 0 ? "visible" : "hidden"
              }`}
              onClick={removeText}
            >
              &#10005;
            </span>

            {viewBox && (
              <div className="overflow-y-auto rounded-md grid grid-cols-12 py-2 gap-5">
                {filteredChampions.map((champ, index) => (
                  <div
                    key={index}
                    className="rounded-md relative overflow-hidden border border-teal-500/30"
                    onClick={(e) => handleAddChamp(champ.name)}
                  >
                    <img
                      src={`http://ddragon.leagueoflegends.com/cdn/13.11.1/img/champion/${champ.image.full}`}
                      alt=""
                      height={100}
                      width={100}
                      className="scale-110"
                    />
                    <span className="absolute bottom-0 left-0 right-0 text-center bg-zinc-950/80 text-xs py-2 uppercase text-teal-500">
                      {champ.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ChampSearch;
