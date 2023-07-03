import CircularLoading from "@components/UI/CircularLoading";
import { useState, useEffect } from "react";
import { FetchPlayerEvent } from "./Functions/FetchPlayerEvent";
import { supabase } from "@supabase";

const OpenEvent = ({ event, teamName, teamId }) => {
  const [loading, setLoading] = useState(true);
  const [complete, setComplete] = useState(false);

  const [players, setPlayers] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    FetchPlayerEvent(event.id)
      .then((value) => {
        setLoading(false);
        setPlayers(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDeleteInputChange = (e) => {
    e.target.value.toLowerCase() === "delete"
      ? setIsButtonDisabled(false)
      : setIsButtonDisabled(true);
  };

  const deleteEvent = async () => {
    try {
      const { data, error } = await supabase
        .from("event")
        .delete()
        .eq("id", event.id);

      if (errorEvent) {
        throw errorEvent;
      }
    } catch (error) {
      console.error("Error: " + error);
    } finally {
      setComplete(true);
      setLoading(false);
      setTimeout(() => {
        window.location.href =
          `/dashboard/team/schedule/` + teamName + "/" + teamId;
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
        <>
          <div className="border-b border-zinc-800 mb-4">
            <p className="bg-zinc-950 p-2 rounded-md mb-2">
              <span className="text-sm pr-2 font-light border-r border-zinc-700 text-teal-500">
                Date
              </span>
              <span className="text-sm pl-2 font-light text-zinc-400">
                {event.date}
              </span>
            </p>
            <p className="bg-zinc-950 p-2 rounded-md mb-4">
              <span className="text-sm pr-2 font-light border-r border-zinc-700 text-teal-500">
                Time
              </span>
              <span className="text-sm pl-2 font-light text-zinc-400">
                {event.time}
              </span>
            </p>
          </div>

          {players && players.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {players.map((player, index) => (
                <p
                  key={player.player_id.id}
                  className="bg-zinc-950 rounded-md p-2 flex items-center gap-2"
                >
                  <img
                    src={player.player_id.role.image_link}
                    alt=""
                    width={18}
                  />
                  <div>
                    <span className="text-zinc-400 text-sm">
                      {player.player_id.name}
                    </span>
                  </div>
                </p>
              ))}
            </div>
          ) : (
            <div className="flex w-full">
              <p className="bg-zinc-950 rounded-md p-2 flex items-center w-full text-zinc-400">
                <span>No players were added to this event.</span>
              </p>
            </div>
          )}

          <div className="mt-4 text-right flex border-t border-zinc-800 pt-4">
            <input
              type="text"
              className="bg-zinc-950 border-b-2 border-teal-500/20 outline-none h-10 px-2 text-sm focus:border-teal-500 transition ease-in-out duration-200 text-zinc-200 rounded-md"
              placeholder="Write 'delete' to enable it"
              onChange={handleDeleteInputChange}
            />
            <button
              className={`ml-4  px-2 rounded-md text-xs uppercase  ${
                !isButtonDisabled
                  ? `bg-teal-600 text-zinc-200`
                  : `bg-zinc-800 text-zinc-400`
              }`}
              disabled={isButtonDisabled}
              onClick={deleteEvent}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default OpenEvent;
