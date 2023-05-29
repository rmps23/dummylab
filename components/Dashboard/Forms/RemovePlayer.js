import React, { useState } from "react";
import Button from "components/Items/Button";
import CancelButton from "../../Items/CancelButton";
import { supabase } from "../../../supabase";
import CircularProgress from "@mui/material/CircularProgress";

const RemovePlayer = ({
  playerName,
  playerID,
  teamName,
  teamID,
  handleCloseRemoveModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from("players")
        .delete()
        .eq("id", playerID);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error: " + error);
    } finally {
      setComplete(true);
      setIsLoading(false);
      setTimeout(() => {
        window.location.href =
          `/dashboard/team/players/` + teamName + "/" + teamID;
      }, 1000);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full items-center text-center">
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
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
          <p className="text-sm text-teal-500 text-center absolute left-5 top-6 font-light uppercase">
            Remove Player
          </p>
          <p className="text-zinc-200">
            Do you confirm to remove{" "}
            <span className="text-teal-500">{playerName}</span> from{" "}
            <span className="text-teal-500">{teamName}</span>?
          </p>
          <form className="text-lg" onSubmit={handleSubmit}>
            <div className="w-full mt-4 gap-2 flex flex-row-reverse items-center">
              <Button text="Confirm"></Button>
              <CancelButton
                text="Cancel"
                handleCloseRemoveModal={handleCloseRemoveModal}
              ></CancelButton>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RemovePlayer;
