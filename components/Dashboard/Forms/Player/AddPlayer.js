import React from "react";
import { useState, useRef } from "react";
import { supabase } from "../../../../supabase";
import { useMutation } from "react-query";
import { FetchRoles } from "@components/Functions/FetchRoles";
import { FetchRoleState } from "@components/Functions/FetchRoleState";

import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";
import usePlayerStore from "@components/Store/playerStore";

const AddPlayer = ({ teamID, setCloseModal }) => {
  let addPlayer = usePlayerStore((state) => state.addPlayer);

  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const stateRef = useRef(null);

  const [complete, setComplete] = useState(false);

  const { roles, rolesLoading, rolesError } = FetchRoles();
  const { roleState, roleStateLoading, roleStateError } = FetchRoleState();

  const insertPlayer = useMutation((values) => {
    return supabase
      .from("player")
      .insert(values)
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

    const { data } = await insertPlayer.mutateAsync({
      name: name,
      role: role,
      role_state: roleState,
      team_id: teamID,
    });

    addPlayer(data[0]);
    setComplete(true);
    setCloseModal(true);
  };

  return (
    <>
      {complete ? (
        <div className="text-center">
          <p className="text-teal-500">Player added with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <>
          <form className="text-lg" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <input
                type="text"
                className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md"
                placeholder="Insert player name..."
                ref={nameRef}
                required
              />
              <select
                className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md cursor-pointer"
                placeholder="Player role..."
                ref={roleRef}
                required
              >
                {roles &&
                  roles.length > 0 &&
                  roles.map((role, index) => {
                    return (
                      <option key={index} value={`${role.id}`}>
                        {role.name}
                      </option>
                    );
                  })}
              </select>
              <select
                className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md cursor-pointer"
                placeholder="Main/Sub"
                ref={stateRef}
                required
              >
                {roleState &&
                  roleState.length > 0 &&
                  roleState.map((roleState) => {
                    return (
                      <option key={roleState.id} value={roleState.id}>
                        {roleState.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <br />
            <div className="w-full text-right">
              <Button text="Confirm" />
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default AddPlayer;
