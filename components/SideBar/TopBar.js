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

const TopBar = () => {
  // const [hover, setHover] = useState(false);

  // const openHover = () => {
  //   setHover(true);
  // };

  // const closeHover = () => {
  //   setHover(false);
  // };

  // const params = useParams();
  // const [teamID, setTeamID] = useState();
  // const [teamName, setTeamName] = useState();

  // useEffect(() => {
  //   setTeamID(params.teamId);
  //   setTeamName(params.teamName);
  // }, [params]);

  return (
    <>
      <div className="w-full px-20 py-5 flex justify-between items-center bg-zinc-950 bg-opacity-40">
        <div>
          <Link href="dashboard/team">
            <Image
              src="/assets/dummylab-logo-wt-w.png"
              width={80}
              height={0}
              alt="DummyLab Logo"
            />
          </Link>
        </div>
        <div className="flex gap-10">
          <Link
            href="/dashboard/team"
            className="hover:text-teal-300 font-light transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/dashboard/team"
            className="hover:text-teal-300 font-light transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/dashboard/team"
            className="hover:text-teal-300 font-light transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/dashboard/team"
            className="hover:text-teal-300 font-light transition-all duration-300"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
