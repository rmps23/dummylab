import React, { useState } from "react";
import { supabase } from "../../../../supabase";
import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";

const RemovePlayer = ({ playerName, playerID, teamName, teamID }) => {
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("player")
        .delete()
        .eq("id", playerID);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error: " + error);
    } finally {
      setComplete(true);
      setLoading(false);
      setTimeout(() => {
        window.location.href =
          `/dashboard/team/players/` + teamName + "/" + teamID;
      }, 1000);
    }
  };

  return (
    <>
      {loading ? (
        <div className="w-full text-center">
          <CircularLoading />
        </div>
      ) : complete ? (
        <div className="text-center">
          <p className="text-teal-500">Player removed with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-zinc-200">
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
