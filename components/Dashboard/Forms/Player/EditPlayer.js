import React from "react";
import { useState, useRef } from "react";
import { supabase } from "../../../../supabase";
import { FetchRoles } from "@components/Functions/FetchRoles";
import { FetchRoleState } from "@components/Functions/FetchRoleState";
import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";
import { useMutation } from "react-query";
import usePlayerStore from "@components/Store/playerStore";

const EditPlayer = ({
  playerID,
  playerName,
  playerRole,
  playerRoleState,
  setOpen,
}) => {
  let editPlayerStore = usePlayerStore((state) => state.editPlayer);

  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const stateRef = useRef(null);

  const [complete, setComplete] = useState(false);

  const { roles, rolesLoading, rolesError } = FetchRoles();
  const { roleState, roleStateLoading, roleStateError } = FetchRoleState();

  const editPlayer = useMutation((values) => {
    const { name, role, role_state, playerID } = values;
    return supabase
      .from("player")
      .update({
        name: name,
        role: role,
        role_state: role_state,
      })
      .eq("id", playerID)
      .select(
        " * , role (id, name, image_link) , role_state(id, name) , team(name)"
      );
  });

  if (rolesLoading || roleStateLoading)
    return (
      <h1>{JSON.stringify(rolesError) + JSON.stringify(roleStateError)}</h1>
    );

  if (rolesLoading || roleStateLoading)
    return <CircularLoading size={10} color={"text-zinc-600"} />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const role = roleRef.current.value;
    const roleState = stateRef.current.value;

    const { data: updatedPlayer } = await editPlayer.mutateAsync({
      name: name,
      role: role,
      role_state: roleState,
      playerID: playerID,
    });

    editPlayerStore(playerID, updatedPlayer[0]);

    setComplete(true);
    setOpen(false);
  };

  return (
    <>
      {complete ? (
        <div className="text-center">
          <p className="text-teal-500">Player edited with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <form className="text-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex-col flex">
              <label className="text-zinc-500 text-sm mb-1">Name</label>
              <input
                type="text"
                defaultValue={playerName}
                ref={nameRef}
                className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md"
                placeholder="Insert team name..."
                required
              />
            </div>
            <div className="flex-col flex">
              <label className="text-zinc-500 text-sm mb-1">Role</label>
              <select
                className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md"
                placeholder="Player role..."
                ref={roleRef}
                required
              >
                {roles.length > 0 &&
                  roles.map((role, index) => {
                    return (
                      <option
                        key={index}
                        selected={role.id === playerRole}
                        value={role.id}
                      >
                        {role.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="flex-col flex">
              <label className="text-zinc-500 text-sm mb-1">Main/Sub</label>
              <select
                className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md"
                placeholder="Main/Sub"
                ref={stateRef}
                required
              >
                {roleState.length > 0 &&
                  roleState.map((roleState, index) => {
                    return (
                      <option
                        key={roleState.id}
                        value={roleState.id}
                        selected={roleState.id === playerRoleState}
                      >
                        {roleState.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <br />
          <div className="w-full text-right">
            <Button text="Confirm" />
          </div>
        </form>
      )}
    </>
  );
};

export default EditPlayer;
