"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@components/UI/Button";

export default function PlayerSchedule() {
  const params = useParams();
  var teamName = decodeURIComponent(params.teamName);
  teamName = teamName.replace(/\+/g, " ");

  return (
    <>
      <div className="flex flex-col justify-center">
        <Image
          src="/assets/dummylab-logo-wt-w.png"
          alt=""
          width={150}
          height={0}
          priority="true"
          className="mb-20 m-auto"
        />
        <div className="text-center mb-14">
          <p className="text-3xl uppercase text-teal-500 mb-2">{teamName}</p>
          <p className="text-xl text-zinc-400">
            Insert your player code to enter.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <input
            type="text"
            className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md w-96 text-center"
            required
          />
          <Button text="Enter" />
        </div>
      </div>
    </>
  );
}
