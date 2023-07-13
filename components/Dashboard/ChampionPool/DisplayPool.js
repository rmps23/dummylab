import React, { useEffect, useState } from "react";
import Image from "next/image";

const DisplayPool = ({ image, name }) => {
  return (
    <>
      <div className="overflow-hidden border border-teal-950 rounded-md m-auto hover:scale-110 transition-all duration-200 relative group shadow-md hover:shadow-teal-900 hover:border-teal-500">
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${image}`}
          alt=""
          className="scale-125 transition-all top-0"
          width={80}
          height={80}
          priority="true"
        />
        <span className="absolute -bottom-5 group-hover:bottom-0 left-0 right-0 bg-zinc-950 text-teal-500 text-[10px] items-center justify-center flex transition-all duration-200 ease-in-out backdrop-blur-sm bg-opacity-80">
          {name}
        </span>
      </div>
    </>
  );
};

export default DisplayPool;
