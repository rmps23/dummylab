import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

const EditPool = ({ playerName }) => {
  // const [pool, setPool] = useState(null);
  // const [champions, setChampions] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [complete, setComplete] = useState(false);
  // const [searchValue, setSearchValue] = useState("");

  // const handleSearch = async (value) => {
  //   try {
  //     const response = await fetch(
  //       "http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json"
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       const championData = data.data;

  //       const filteredChampions = Object.values(data.data).filter((champion) =>
  //         champion.name.toLowerCase().includes(value)
  //       );

  //       setChampions(filteredChampions);
  //     } else {
  //       throw new Error("Failed to fetch champion data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error.message);
  //   }

  //   setSearchValue(value);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json"
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         const championData = data.data;

  //         const championsArray = Object.values(championData);

  //         setChampions(championsArray);
  //       } else {
  //         throw new Error("Failed to fetch champion data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleCheck = (index) => {
  //   checkboxRefs.current[index].checked = !checkboxRefs.current[index].checked;
  // };

  return (
    <div>
      {/* {isLoading ? (
        <div className="w-full items-center text-center">
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : complete ? (
        <div className="text-center">
          <p className="text-teal-500">Player added with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-sm text-teal-500 text-center absolute left-5 top-6 font-light uppercase">
            Choose {playerName} Champion Pool
          </p>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6">
              <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                value={searchValue.toLowerCase()}
              />
            </div>
            {champions.map((champion, index) => (
              <div key={index} className="text-center">
                <input
                  ref={(ref) => (checkboxRefs.current[index] = ref)}
                  type="checkbox"
                ></input>
                <img
                  src={
                    "http://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/" +
                    champion.image.full
                  }
                  onClick={() => handleCheck(index)}
                />
                {champion.name}
              </div>
            ))}
          </div>
        </div>
      )} */}
      teste
    </div>
  );
};

export default EditPool;
