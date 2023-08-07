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
import { VscChromeClose } from "react-icons/vsc";

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
        <div
          className={`fixed left-0 bottom-0 right-0 h-14 grid grid-cols-5 items-center px-4 transition-all duration-200 z-50 bg-zinc-950/70 backdrop-blur-lg border-zinc-950/20 border-t-2 ${
            menu ? `bottom-0` : `-bottom-40`
          }`}
        >
          <div
            className={`absolute w-full h-14 transition-all duration-200 ease-in-out flex justify-between px-8   ${
              menu === true ? `bottom-0` : `-bottom-40`
            }`}
          >
            <div className="flex gap-10">
              <Link href={`/dashboard/team/`}>
                <FaHome className="text-5xl rounded-md p-2 mt-[3px]" />
              </Link>
              <Signout />
            </div>
            <div className="flex">
              <VscChromeClose
                className="text-zinc-300 text-5xl rounded-md p-2 mt-[3px]"
                onClick={handleMenu}
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`fixed left-0 right-0 h-14 bg-zinc-950/70 backdrop-blur-lg z-50 border-zinc-950/20 border-t-2 grid grid-cols-5 items-center px-4 transition-all duration-200 ${
          menu ? `-bottom-20` : `bottom-0`
        }`}
      >
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
