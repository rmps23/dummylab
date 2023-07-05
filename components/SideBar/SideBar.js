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

const SideBar = () => {
  const [hover, setHover] = useState(false);

  const openHover = () => {
    setHover(true);
  };

  const closeHover = () => {
    setHover(false);
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
      <div
        className={`fixed z-50 top-0 left-0 bottom-0 w-20 transition-all ease-in-out duration-200 bg-zinc-950 p-2 pb-5 pt-10 flex flex-col justify-between ${
          hover === true && "w-64"
        }`}
        onMouseEnter={openHover}
        onMouseLeave={closeHover}
      >
        <div className="overflow-hidden">
          <div className="pl-5 mb-8 flex" style={{ width: 200, height: 25 }}>
            <Link href="/dashboard/team">
              <Image
                src="/assets/dummylab-logo-w.png"
                alt=""
                width={25}
                height={25}
              />
            </Link>
            <span
              className={`opacity-0 transition-all text-md group-hover:text-zinc-300 ${
                hover === true && "opacity-100"
              }`}
            >
              <Link href="/dashboard/team">
                <Image
                  src="/assets/dummylab-text.png"
                  alt=""
                  width={70}
                  height={0}
                  className="mt-[2px]"
                />
              </Link>
            </span>
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
    </>
  );
};

export default SideBar;
