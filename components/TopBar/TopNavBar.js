"use client";

import React from "react";
import TopNavBarLink from "../TopBar/TopNavBarLink";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const TopNavBar = () => {
  const params = useParams();

  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
  }, []);

  return (
    <div className="fixed w-full py-3 bg-zinc-950 bg-opacity-30 backdrop-filter backdrop-blur-sm z-40">
      <div className="max-w-7xl mx-auto items-center md:flex px-4">
        {params.teamId ? (
          <>
            <TopNavBarLink text={"Teams"} link="/dashboard/team" />
            <TopNavBarLink
              text={"Profile"}
              link={`/dashboard/team/${teamName}/${teamID}`}
            />
            <TopNavBarLink
              text={"Players"}
              link={`/dashboard/team/players/${teamName}/${teamID}`}
            />
            <TopNavBarLink
              text={"Champion Pool"}
              link={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
            />
            <TopNavBarLink text={"Schedule"} link="/#" />
            <TopNavBarLink text={"Analytics"} link="/#" disabled={true} />
          </>
        ) : (
          <TopNavBarLink text={"Teams"} link="/dashboard/team" />
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
