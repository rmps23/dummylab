import React, { useEffect, useState } from "react";
import CircularLoading from "@components/UI/CircularLoading";

const DisplayPool = ({ champID, name, image, champions }) => {
  const [champion, setChampion] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(champions);
  return (
    <>
      <div className="overflow-hidden rounded-md border border-teal-500/60 m-auto">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${image}`}
          alt=""
          className="scale-110"
        />
      </div>
    </>
  );
};

export default DisplayPool;
