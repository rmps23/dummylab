import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FetchEvents } from "./Functions/FetchEvents";
import CircularLoading from "@components/UI/CircularLoading";
import Image from "next/image";
import ShareLink from "@components/Dashboard/Profile/ShareLink";

const Events = () => {
  const params = useParams();
  const teamID = params.teamId;

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

  console.log(events);
  return (
    <div>
      <div>{events.length > 0 ? <>teste23</> : <>no events were found</>}</div>
    </div>
  );
};

export default Events;
