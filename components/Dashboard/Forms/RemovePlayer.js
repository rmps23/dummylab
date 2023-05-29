import React from "react";
import Button from "components/Items/Button";
import CancelButton from "../../Items/CancelButton";

const RemovePlayer = ({
  playerName,
  playerID,
  teamName,
  handleCloseRemoveModal,
}) => {
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setIsLoading(true);
    // try {
    //   const { error } = await supabase
    //     .from("players")
    //     .update({
    //       name: name,
    //       role: role,
    //       role_state: roleState,
    //     })
    //     .eq("id", playerID);
    //   if (error) {
    //     throw error;
    //   }
    // } catch (error) {
    //   console.error("Error: " + error);
    // } finally {
    //   setComplete(true);
    //   setIsLoading(false);
    //   setTimeout(() => {
    //     window.location.href =
    //       `/dashboard/team/players/` + teamName + "/" + teamID;
    //   }, 1000);
    // }
  };
  return (
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
  );
};

export default RemovePlayer;
