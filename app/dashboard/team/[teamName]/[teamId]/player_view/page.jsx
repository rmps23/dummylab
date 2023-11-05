"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useRef, useState } from "react";

export default function PlayerView() {
  const params = useParams();
  const code = useRef(null);
  const [codeValue, setCodeValue] = useState(null);

  var teamName = decodeURIComponent(params.teamName);
  teamName = teamName.replace(/\+/g, " ");

  const handleCode = () => {
    setCodeValue(code.current.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src="/assets/dummylab-logo-wt-w.png"
          alt=""
          width={150}
          height={0}
          priority="true"
          className="mb-10"
        />
        <div className="text-center mb-14">
          <p className="text-3xl uppercase text-teal-500 mb-2">{teamName}</p>
          <p className="text-xl text-zinc-400">
            Insert your player code to enter.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md w-96 text-center"
            required
            ref={code}
          />
          <button text="Enter" onClick={handleCode}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
