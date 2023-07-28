"use client";

import { useState } from "react";
import CircularLoading from "@components/UI/CircularLoading";
import TeamPlayers from "@components/Dashboard/Players/TeamPlayers";
import ChooseTeam from "@components/Dashboard/Team/ChooseTeam";

export default function Players() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="sm:px-4 relative">
        {isLoading ? (
          <CircularLoading />
        ) : (
          <>
            <ChooseTeam />
            <TeamPlayers />
          </>
        )}
      </div>
    </>
  );
}
