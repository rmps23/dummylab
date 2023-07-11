import React, { useState } from "react";
import { supabase } from "../../../../supabase";
import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";
import { useMutation } from "react-query";
import usePlayerStore from "@components/Store/playerStore";

const RemovePlayer = ({
  playerName,
  playerID,
  teamName,
  teamID,
  setCloseModal,
}) => {
  let removePlayerStore = usePlayerStore((state) => state.removePlayer);

  const [complete, setComplete] = useState(false);

  const removePlayer = useMutation((playerID) => {
    return supabase.from("player").delete().eq("id", playerID);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await removePlayer.mutateAsync(playerID);

    removePlayerStore(playerID);
    setComplete(true);
    setCloseModal(true);
  };

  return (
    <>
      {complete ? (
        <div className="text-center">
          <p className="text-teal-500">Player removed with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-zinc-200 p-4 rounded-md bg-zinc-900">
            Do you confirm to remove{" "}
            <span className="text-teal-500">{playerName} </span> from{" "}
            <span className="text-teal-500">{teamName} </span>?
          </p>
          <form className="text-lg" onSubmit={handleSubmit}>
            <div className="w-full mt-8 gap-2 flex flex-row-reverse items-center">
              <Button text="Confirm"></Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RemovePlayer;
