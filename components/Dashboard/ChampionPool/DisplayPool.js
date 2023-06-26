import React, { useEffect, useState } from "react";

const DisplayPool = ({ image, name }) => {
  return (
    <>
      <div className="overflow-hidden border border-teal-500/60 m-auto relative">
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
