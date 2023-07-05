"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import SideBarLink from "./SideBarLink";
import Signout from "@components/Auth/Signout";

import { FaHome } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const SideBarMobile = () => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  const params = useParams();
  const [teamID, setTeamID] = useState();
  const [teamName, setTeamName] = useState();

  useEffect(() => {
    setTeamID(params.teamId);
    setTeamName(params.teamName);
  }, [params]);

  return (
    <>
      <span
        onClick={toggleHover}
        className="ml-6 text-3xl text-zinc-400 cursor-pointer"
      >
        &#9776;
      </span>
      <div
        className={`absolute top-0 sm:left-0 bottom-0 z-50 transition-all ease-in-out duration-200 bg-zinc-950 p-2 pb-5 pt-14 flex flex-col justify-between border-r border-zinc-900 ${
          hover === true ? "left-0 w-64" : "-left-64"
        }`}
      >
        <span
          onClick={toggleHover}
          className="absolute top-4 right-4 text-xl cursor-pointer text-teal-600"
        >
          &#10005;
        </span>
        <div>
          <div className="pl-5 mb-8">
            <Link href="/dashboard/team" prefetch={false}>
              <Image
                src="/assets/dummylab-logo-wt-w.png"
                alt=""
                width={100}
                height={25}
              />
            </Link>
          </div>
          {teamID ? (
            <div className="flex-col flex gap-1">
              <SideBarLink
                icon={<FaHome />}
                hover={hover}
                link="/dashboard/team"
                text={"Home"}
              />
              <SideBarLink
                icon={<FaShieldAlt />}
                hover={hover}
                link={`/dashboard/team/${teamName}/${teamID}`}
                text={"Profile"}
              />
              <SideBarLink
                icon={<FaUsers />}
                hover={hover}
                link={`/dashboard/team/players/${teamName}/${teamID}`}
                text={"Players"}
              />
              <SideBarLink
                icon={<FaStar />}
                hover={hover}
                link={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
                text={"Pool"}
              />
              <SideBarLink
                icon={<FaRegCalendarAlt />}
                hover={hover}
                link={`/dashboard/team/schedule/${teamName}/${teamID}`}
                text={"Schedule"}
              />
            </div>
          ) : (
            <div>
              <SideBarLink
                icon={<FaHome />}
                hover={hover}
                link="/dashboard/team"
                text={"Home"}
              />
            </div>
          )}
        </div>
        <Signout hover={hover} />
      </div>
      <div
        className={`bg-zinc-950/50 absolute top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 backdrop-filter backdrop-blur-sm ${
          hover === false && "hidden"
        }`}
        onClick={toggleHover}
      ></div>
    </>
  );
};

export default SideBarMobile;
