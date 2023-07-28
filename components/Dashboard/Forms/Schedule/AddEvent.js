import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../../supabase";
import { FetchPlayers } from "@components/Dashboard/Players/Functions/FetchPlayers";

import Button from "@components/UI/Button";
import CircularLoading from "@components/UI/CircularLoading";

const AddEvent = ({
  teamID,
  day,
  teamId,
  teamName,
  closeModal,
  setCloseModal,
}) => {
  const [playersA, setPlayers] = useState();
  const [eventPlayers, setEventPlayers] = useState([]);
  const selectRef = useRef(null);

  const eventName = useRef(null);
  const eventTime = useRef(null);

  const [complete, setComplete] = useState(false);

  const moment = require("moment");
  const date = moment(day);
  const textDate = date.format("MMMM D, YYYY");
  const textDateSupa = date.format("YYYY-M-D");

  const { players, playersLoading, playersError } = FetchPlayers(teamID);

  useEffect(() => {
    if (players) {
      setPlayers(players);
    }
  }, [players]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = eventName.current.value;
    const date = textDateSupa;
    const time = eventTime.current.value;

    try {
      const { data: dataEvent, error: errorEvent } = await supabase
        .from("event")
        .insert({
          team_id: teamID,
          name: name,
          date: date,
          time: time,
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
      setTimeout(() => {
        window.location.href =
          `/dashboard/team/schedule/` + teamName + "/" + teamId;
      }, 1000);
    }
  };

  const addPlayer = (player) => {
    setEventPlayers((prevEventPlayers) => [...prevEventPlayers, player]);
    const playersUpdate = playersA.filter((obj) => obj.id !== player.id);
    setPlayers(playersUpdate);
    selectRef.current.options[0].selected = true;
    selectRef.current.focus();
  };

  const removePlayer = (player) => {
    const eventPlayersUpdate = eventPlayers.filter(
      (obj) => obj.id !== player.id
    );
    const playersUpdate = [...playersA, player];
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
      {playersLoading ? (
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
              className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md"
              placeholder="Insert event name..."
              ref={eventName}
              required
            />

            <div className="flex relative items-center gap-2">
              <input
                type="time"
                className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md tracking-widest"
                ref={eventTime}
                required
              />
              <span className="text-xs uppercase text-teal-600">
                Event Time
              </span>
            </div>

            {eventPlayers && eventPlayers.length > 0 ? (
              <div className="grid grid-cols-4 gap-1 gap-y-2 bg-zinc-900 rounded-md px-4 py-[18px]">
                {eventPlayers.map((player) => {
                  return (
                    <div
                      key={player.id}
                      className="bg-zinc-950 rounded-md items-center flex p-4 relative group"
                    >
                      <img src={player.role.image_link} width={18} />
                      <span className="text-sm text-teal-500 ml-1 pt-[2px]">
                        {player.name}
                      </span>
                      <span
                        className="absolute top-0 left-0 right-0 bottom-0 bg-teal-500 backdrop-blur-sm bg-opacity-40 rounded-md text-center text-xs items-center flex opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 cursor-pointer"
                        onClick={() => removePlayer(player)}
                      >
                        <div className="mx-auto uppercase">&#10006;</div>
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-zinc-900 h-16 rounded-md px-4 items-center flex">
                <span className="text-zinc-500 text-sm">
                  No players have been assigned...
                </span>
              </div>
            )}

            {playersA && playersA.length > 0 ? (
              <div>
                <p className="text-xs uppercase text-teal-600 mb-1">
                  Assign player to the event
                </p>
                <select
                  ref={selectRef}
                  className="bg-zinc-900 border-b-2 border-teal-500/20 outline-none p-4 text-md focus:border-teal-400 transition ease-in-out duration-200 text-zinc-200 rounded-md w-full"
                  onChange={(e) => {
                    const selectedPlayer = playersA.find(
                      (player) => player.id === e.target.value
                    );
                    addPlayer(selectedPlayer);
                  }}
                >
                  <option value="">Select a player...</option>

                  {playersA.map((player, index) => {
                    return (
                      <>
                        <option key={index} value={player.id}>
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
