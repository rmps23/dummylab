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
      <div className="sm:px-4 mx-auto">
        {isLoading ? (
          <CircularLoading />
        ) : (
          <>
            <Schedule teamID={teamID} />
          </>
        )}
      </div>
    </>
  );
}
