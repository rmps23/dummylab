"use client";

import Link from "next/link";
import Image from "next/image";
import TopBarLink from "./TopBarLink";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Signout from "@components/Auth/Signout";

const TopBar = () => {
  const params = useParams();
  const [teamID, setTeamID] = useState();
  const [teamName, setTeamName] = useState();

  useEffect(() => {
    setTeamID(params.teamId);
    setTeamName(params.teamName);
  }, [params]);

  return (
    <>
      <div className="w-full px-40 py-10 flex justify-between items-center">
        <div>
          <Link href="dashboard/team">
            <Image
              src="/assets/dummylab-logo-wt-w.png"
              width={100}
              height={0}
              alt="DummyLab Logo"
            />
          </Link>
        </div>
        <div className="flex gap-10 items-center text-stone-300">
          <TopBarLink link="/main" text="Home" />
          <TopBarLink
            link={`/dashboard/team/${teamName}/${teamID}`}
            text="Teams"
          />
          <Signout />
        </div>
      </div>
    </>
  );
};

export default TopBar;
