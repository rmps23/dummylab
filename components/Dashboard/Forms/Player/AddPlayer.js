import React from "react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../../supabase";
import { FetchRoles } from "@components/Functions/FetchRoles";
import { FetchRoleState } from "@components/Functions/FetchRoleState";
import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";

const AddPlayer = ({ teamName, teamID }) => {
  const [roles, setRoles] = useState([]);
  const [roleState, setRoleState] = useState([]);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const stateRef = useRef(null);

  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    FetchRoles()
      .then((value) => {
        setRoles(value);
      })
      .catch((error) => {
        console.error(error);
      });

    FetchRoleState()
      .then((value) => {
        setRoleState(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const role = roleRef.current.value;
    const roleState = stateRef.current.value;

    setLoading(true);

    try {
      const { error } = await supabase.from("player").insert({
        name: name,
        role: role,
        role_state: roleState,
        team_id: teamID,
      });

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
          <p className="text-teal-500">Player added with success!</p>
          <p className="my-4 text-zinc-200">Redirecting...</p>
          <div className="bg-teal-500 text-zinc-200 rounded-full h-14 w-14 items-center flex shadow-lg shadow-teal-600/20 mx-auto">
            <p className="mx-auto text-3xl">&#10004;</p>
          </div>
        </div>
      ) : (
        <form className="text-lg" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md"
              placeholder="Insert team name..."
              ref={nameRef}
              required
            />
            <select
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md cursor-pointer"
              placeholder="Player role..."
              ref={roleRef}
              required
            >
              {roles.length > 0 &&
                roles.map((role, index) => {
                  return (
                    <option key={index} value={`${role.id}`}>
                      {role.name}
                    </option>
                  );
                })}
            </select>
            <select
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md cursor-pointer"
              placeholder="Main/Sub"
              ref={stateRef}
              required
            >
              {roleState.length > 0 &&
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
      )}
    </>
  );
};

export default AddPlayer;
