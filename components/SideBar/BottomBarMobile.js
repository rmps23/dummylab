"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Signout from "@components/Auth/Signout";

import { RiDashboard3Fill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const BottomBarMobile = () => {
  const pathname = usePathname();
  const params = useParams();
  const [teamID, setTeamID] = useState();
  const [teamName, setTeamName] = useState();
  const [square, setSquare] = useState("21px");

  useEffect(() => {
    setTeamID(params.teamId);
    setTeamName(params.teamName);
  }, [params]);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-zinc-950/70 backdrop-blur-lg z-50 border-zinc-950/20 border-t-2 grid grid-cols-5 items-center px-4">
        <div className="flex justify-center text-2xl text-zinc-400 relative">
          <Link
            href={`/dashboard/team/${teamName}/${teamID}`}
            className="flex w-full justify-center"
          >
            <FaShieldAlt
              className={`${
                pathname === `/dashboard/team/${teamName}/${teamID}`
                  ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
                  : `absolute -top-3`
              }`}
              onClick={(e) => handleSquare("21px")}
            />
          </Link>
        </div>
        <div className="flex justify-center text-2xl text-zinc-400 relative">
          <Link
            href={`/dashboard/team/players/${teamName}/${teamID}`}
            className="flex w-full justify-center"
          >
            <FaUsers
              className={`${
                pathname === `/dashboard/team/players/${teamName}/${teamID}`
                  ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
                  : `absolute -top-3`
              }`}
            />
          </Link>
        </div>
        <div className="flex justify-center text-2xl text-zinc-400 relative">
          <Link
            href={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
            className="flex w-full justify-center"
          >
            <FaStar
              className={`${
                pathname ===
                `/dashboard/team/champion_pool/${teamName}/${teamID}`
                  ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
                  : `absolute -top-3`
              }`}
            />
          </Link>
        </div>
        <div className="flex justify-center text-2xl text-zinc-400 relative">
          <Link
            href={`/dashboard/team/schedule/${teamName}/${teamID}`}
            className="flex w-full justify-center"
          >
            <FaRegCalendarAlt
              className={`${
                pathname === `/dashboard/team/schedule/${teamName}/${teamID}`
                  ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
                  : `absolute -top-3`
              }`}
            />
          </Link>
        </div>
        {/* <div className="flex justify-center text-2xl text-zinc-500 relative">
          <div className="flex w-full justify-center">
            <RiDashboard3Fill className="absolute -top-4" />
            <span className="bg-teal-800 rounded-md uppercase text-[10px] text-zinc-200 absolute text-center leading-none p-1 top-0">
              Soon
            </span>
          </div>
        </div> */}
        <div className="flex justify-center text-2xl">
          <Signout />
        </div>
      </div>
    </>
  );
};

export default BottomBarMobile;
