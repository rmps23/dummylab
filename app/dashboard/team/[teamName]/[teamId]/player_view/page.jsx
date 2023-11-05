"use client";

import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { useRef, useState } from "react";
import { supabase } from "@supabase";

import Image from "next/image";
import Button from "@components/UI/Button";

export default function PlayerView() {
  const params = useParams();
  const code = useRef(null);
  const teamID = params.teamId;
  const [success, setSuccess] = useState(false);

  var teamName = decodeURIComponent(params.teamName);
  teamName = teamName.replace(/\+/g, " ");

  const handleCode = async (e) => {
    e.preventDefault();
    const code_value = code.current.value;

    const { data: player } = await mutationCode.mutateAsync({
      code: code_value,
      team_id: teamID,
    });

    if (player.length > 0) {
      setSuccess(true);
    } else {
      console.log("teste");
    }
  };

  const mutationCode = useMutation(async (values) => {
    const { code, team_id } = values;
    return supabase
      .from("player")
      .select("*")
      .eq("share_pw", code)
      .eq("team_id", team_id);
  });

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
        <form onSubmit={handleCode}>
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
            {success ? (
              <>
                <p>Success</p>
              </>
            ) : (
              <>
                <Button text="Enter">Confirm</Button>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
