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

  const handleSquare = (value) => {
    setSquare(value);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-zinc-950/70 backdrop-blur-lg z-50 border-zinc-950/20 border-t-2 grid grid-cols-6 items-center px-4">
        <div
          className={`h-12 w-12 absolute bg-teal-600 rounded-md -top-4 transition-all duration-300`}
          style={{ left: square }}
        ></div>
        <div className="flex justify-center text-2xl text-zinc-400 relative">
          <Link
            href={`/dashboard/team/${teamName}/${teamID}`}
            className="flex w-full justify-center"
          >
            <FaShieldAlt
              className={`${
                pathname === `/dashboard/team/${teamName}/${teamID}`
                  ? `text-zinc-100 absolute -top-8 transition-all duration-300 ease-in-out`
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
                  ? `text-zinc-100 absolute -top-8 transition-all duration-200`
                  : `absolute -top-3`
              }`}
              onClick={(e) => handleSquare("81px")}
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
                  ? `text-zinc-100 absolute -top-8 transition-all duration-200`
                  : `absolute -top-3`
              }`}
              onClick={(e) => handleSquare("141px")}
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
                  ? `text-zinc-100 absolute -top-8 transition-all duration-200`
                  : `absolute -top-3`
              }`}
              onClick={(e) => handleSquare("201px")}
            />
          </Link>
        </div>
        <div className="flex justify-center text-2xl text-zinc-400 relative">
          <div className="flex w-full justify-center">
            <RiDashboard3Fill
              className={`${
                pathname === `` && `text-zinc-100 absolute -top-2`
              }`}
              onClick={(e) => handleSquare("261px")}
            />
          </div>
        </div>
        <div className="flex justify-center text-2xl">
          <Signout onClick={(e) => handleSquare("321px")} />
        </div>
      </div>
    </>
  );
};

export default BottomBarMobile;
