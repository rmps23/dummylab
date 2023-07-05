"use client";

import { useState } from "react";
import CircularLoading from "@components/UI/CircularLoading";
import { useParams } from "next/navigation";
import Schedule from "@components/Dashboard/Schedule/Schedule";

export default function Players() {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const teamID = params.teamId;

  return (
    <>
      <div className="bg-zinc-900 h-auto pt-16">
        <div className="max-w-7xl mx-auto p-3">
          {isLoading ? (
            <CircularLoading />
          ) : (
            <>
              <Schedule teamID={teamID} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
