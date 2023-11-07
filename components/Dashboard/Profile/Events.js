import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchEvents } from "./Functions/FetchEvents";
import CircularLoading from "@components/UI/CircularLoading";
import Image from "next/image";
import ShareLink from "@components/Dashboard/Profile/ShareLink";
import Modal from "@components/UI/Modal";
import OpenEvent from "../Schedule/OpenEvent";


const Events = () => {
  const params = useParams();
  const teamID = params.teamId;
  const teamName = params.teamName;

  const [closeModal, setCloseModal] = useState(false);

  const { events, eventsLoading, eventsError } = FetchEvents(teamID);

  if (eventsLoading) {
    return (
      <div className="h-full relative group">
        <div>
          <div className="rounded-md bg-zinc-950 p-4">
            <span className="text-md uppercase text-zinc-200 font-light flex w-full">
              Main Players
            </span>
            <div className="flex items-center justify-center pt-10">
              <CircularLoading color={"text-zinc-500"} size={25} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (eventsError) return <h1>{"Error"}</h1>;

  return (
    <div className="w-full grid grid-cols-4 gap-2 bg-zinc-950 p-2 rounded-md">
      {events && events.length ? (
        <>
          {events.map((event, index) => (
            <div
              className="bg-zinc-900 h-32 w-full rounded-md p-2 relative grid col-span-4 pt-8 sm:col-span-1"
              key={index}
            >
              <Modal
                btn={event.name + " / " + event.time}
                icon={""}
                classes={`bg-teal-700/60 hover:bg-teal-700 h-full rounded-md text-zinc-300 py-2 px-2 cursor-pointer mb-2 text-sm text-center w-full flex hover:bg-teal-600 transition ease-in-out duration-200`}
                form={
                  <OpenEvent
                    event={event}
                    teamId={teamID}
                    teamName={teamName}
                    closeModal={closeModal}
                    setCloseModal={setCloseModal}
                  />
                }
                title={event.name}
                closeModal={closeModal}
                setCloseModal={setCloseModal}
              />
              <span className="absolute top-2 right-2 text-teal-500 text-sm">
                {event.time}
              </span>
              <span className="absolute top-2 left-2 text-zinc-300 text-sm">
                {event.name}
              </span>
            </div>
          ))}
          {events.length < 4 && (
            <div className="bg-zinc-900/30 h-full w-full rounded-md p-2 col-span-1 items-center justify-center grid">
              <span className="opacity-60 text-teal-600">
                There are no more upcoming events.
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="p-4">There are no events in your schedule.</div>
      )}
    </div>
  );
};

export default Events;
