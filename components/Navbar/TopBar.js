"use client";

import Link from "next/link";
import Image from "next/image";
import TopBarLink from "./TopBarLink";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Signout from "@components/Auth/Signout";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

const TopBar = () => {
  const params = useParams();
  const [teamID, setTeamID] = useState();
  const [teamName, setTeamName] = useState();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setTeamID(params.teamId);
    setTeamName(params.teamName);
  }, [params]);

  const showMenu = () => {
    setMenu(!menu);
  }

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
          <div className="relative">
            <AiOutlineMenu className="cursor-pointer" size={25} onClick={showMenu} />
            <div className={`${menu ? "absolute right-0 top-10" : "hidden"} w-40 bg-zinc-700 flex gap-1 p-2 flex-col rounded-md`}>
              <Link href="settings" className="flex gap-2 items-center hover:bg-zinc-800 px-2 py-1 rounded-md">
                <AiFillSetting /> Settings
              </Link>
              <Signout />
            </div>
          </div>
          {/* <Signout /> */}
        </div>
      </div >
    </>
  );
};

export default TopBar;
