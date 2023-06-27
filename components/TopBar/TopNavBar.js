"use client";

import React from "react";
import TopNavBarLink from "../TopBar/TopNavBarLink";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CircularLoading from "@components/UI/CircularLoading";

const TopNavBar = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed w-full bg-zinc-950 bg-opacity-30 backdrop-filter backdrop-blur-sm z-40 shadow-md shadow-neutral-950/50">
          <div className="max-w-7xl mx-auto items-center justify-center md:flex px-3 h-9 mt-1">
            <CircularLoading menu={true} />
          </div>
        </div>
      ) : (
        <div className="fixed w-full bg-zinc-950 bg-opacity-30 backdrop-filter backdrop-blur-sm z-40 shadow-md shadow-neutral-950/50">
          <div className="max-w-7xl mx-auto items-center md:flex px-3">
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
                  text={"Pool"}
                  link={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
                />
                <TopNavBarLink
                  text={"Schedule"}
                  link={`/dashboard/team/schedule/${teamName}/${teamID}`}
                />
                <TopNavBarLink text={"Analytics"} link="/#" disabled={true} />
              </>
            ) : (
              <TopNavBarLink text={"Teams"} link="/dashboard/team" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavBar;
