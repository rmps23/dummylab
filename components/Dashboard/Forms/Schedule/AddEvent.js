import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../../supabase";
import { FetchPlayers } from "@components/Dashboard/Players/Functions/FetchPlayers";

import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";

const AddEvent = ({ teamID, day, teamId, teamName }) => {
  const [players, setPlayers] = useState();
  const [eventPlayers, setEventPlayers] = useState([]);

  const eventName = useRef(null);

  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  const moment = require("moment");
  const date = moment(day);
  const textDate = date.format("MMMM D, YYYY");

  useEffect(() => {
    FetchPlayers(teamID)
      .then((value) => {
        setPlayers(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = eventName.current.value;
    const date = textDate;

    setLoading(true);

    try {
      const { data: dataEvent, error: errorEvent } = await supabase
        .from("event")
        .insert({
          name: name,
          date: date,
        })
        .select();

      if (errorEvent) {
        throw errorEvent;
      }

      const insertPlayersEvent = [];
      eventPlayers.map((player) => {
        insertPlayersEvent.push({
          player_id: player.id,
          event_id: dataEvent[0].id,
        });
      });

      const { data: playerEvent, error: errorPlayerEvent } = await supabase
        .from("player_event")
        .insert(insertPlayersEvent);

      if (errorPlayerEvent) {
        throw errorPlayerEvent;
      }
    } catch (error) {
      console.error("Error: " + error);
    } finally {
      setComplete(true);
      setLoading(false);
      // setTimeout(() => {
      //   window.location.href =
      //     `/dashboard/team/schedule/` + teamName + "/" + teamId;
      // }, 1000);
    }
  };

  const addPlayer = (player) => {
    setEventPlayers((prevEventPlayers) => [...prevEventPlayers, player]);
    const playersUpdate = players.filter((obj) => obj.id !== player.id);
    setPlayers(playersUpdate);
  };

  const removePlayer = (player) => {
    const eventPlayersUpdate = eventPlayers.filter(
      (obj) => obj.id !== player.id
    );
    const playersUpdate = [...players, player];
    playersUpdate.sort(function (a, b) {
      return a.role.id - b.role.id;
    });

    playersUpdate.sort(function (a, b) {
      return a.role_state.id - b.role_state.id;
    });
    setPlayers(playersUpdate);
    setEventPlayers(eventPlayersUpdate);
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
              placeholder="Insert event name..."
              ref={eventName}
              required
            />

            {eventPlayers && eventPlayers.length > 0 ? (
              <div className="grid grid-cols-4 gap-1 gap-y-2 bg-zinc-950 rounded-md p-2">
                {eventPlayers.map((player) => {
                  return (
                    <div className="bg-zinc-900 rounded-md items-center flex p-1 relative group">
                      <img src={player.role.image_link} width={18} />
                      <span className="text-sm text-teal-500 ml-1">
                        {player.name}
                      </span>
                      <span
                        className="absolute top-0 left-0 right-0 bottom-0 bg-teal-700 rounded-md text-center text-xs items-center flex opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer"
                        onClick={() => removePlayer(player)}
                      >
                        <div className="mx-auto uppercase">&#10006;</div>
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-zinc-950 h-11 rounded-md px-2 items-center flex">
                <span className="text-zinc-600 text-sm">
                  No players have been assigned...
                </span>
              </div>
            )}

            {players && players.length > 0 ? (
              <div>
                <p className="text-xs uppercase text-teal-600 mb-1">
                  Assign player to the event
                </p>
                <select className="w-full bg-zinc-950 p-2 py-3 rounded-md relative text-sm text-zinc-300">
                  {players.map((player) => {
                    return (
                      <>
                        <option
                          value={player.id}
                          onClick={() => addPlayer(player)}
                        >
                          {player.name} ({player.role.name} -{" "}
                          {player.role_state.name})
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            ) : (
              <></>
            )}
            {/* <select
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
            </select> */}
          </div>
          <br />
          <div className="w-full text-right items-center gap-2 flex flex-row-reverse">
            <Button text="Confirm" />
            <span className="text-teal-600 uppercase text-sm">{textDate}</span>
          </div>
        </form>
      )}
    </>
  );
};

export default AddEvent;
