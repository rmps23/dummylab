"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Signout from "@components/Auth/Signout";
import Image from "next/image";

import { FaShieldAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { FaHome } from "react-icons/fa";

const BottomBarMobile = () => {
  const pathname = usePathname();
  const params = useParams();
  const [teamID, setTeamID] = useState();
  const [teamName, setTeamName] = useState();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setTeamID(params.teamId);
    setTeamName(params.teamName);
  }, [params]);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      {teamID && (
        <div className="fixed bottom-0 left-0 right-0 h-14 bg-zinc-950/70 backdrop-blur-lg z-40 border-zinc-950/20 border-t-2 grid grid-cols-5 items-center px-4">
          <div
            className={`absolute rounded-md right-5 transition-all duration-200  ease-in-out flex flex-col gap-2 bg-zinc-950/70 backdrop-blur-lg p-2 ${
              menu === true ? `bottom-[64px]` : `-bottom-16`
            }`}
          >
            <Link href={`/dashboard/team/`}>
              <FaHome className="text-5xl bg-teal-600 rounded-md p-2" />
            </Link>
            <Signout />
          </div>
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 h-14 bg-zinc-950/70 backdrop-blur-lg z-50 border-zinc-950/20 border-t-2 grid grid-cols-5 items-center px-4">
        {teamID ? (
          <>
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
                    pathname ===
                    `/dashboard/team/schedule/${teamName}/${teamID}`
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
              <GoGear onClick={handleMenu} />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center text-2xl text-zinc-400 relative pl-4">
              <Link
                href={`/dashboard/team/`}
                className="flex w-full justify-center"
              >
                <Image
                  src="/assets/dummylab-logo-wt-w.png"
                  alt=""
                  height={30}
                  width={60}
                />
              </Link>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className="flex justify-end text-2xl pr-4">
              <Signout />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BottomBarMobile;
