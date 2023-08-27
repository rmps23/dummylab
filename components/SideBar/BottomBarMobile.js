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
import { Backdrop } from "@mui/material";

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

  const activeStyle =
    "text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-700 h-14 w-14 p-4 rounded-md";

  return (
    <>
      {/* {teamID && (
        <div
          className={`fixed bottom-0 h-14 grid grid-cols-5 items-center px-4 transition-all duration-200 z-50 bg-zinc-950/70 backdrop-blur-lg border-zinc-950/20 border-t-2`}
        >
          <div
            className={`absolute w-full h-14 transition-all duration-200 ease-in-out flex justify-end px-8   ${
              menu ? `left-[500px] right-[500px]` : `left-0 right-0`
            }`}
          >
            <div className="flex gap-10">
              <Link href={`/dashboard/team/`}>
                <FaHome className="h-12 w-12 rounded-md p-2" />
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
      )} */}
      {/* <div
        className={`fixed bottom-0 h-14 bg-zinc-950/70 backdrop-blur-lg z-50 border-zinc-950/20 border-t-2 grid grid-cols-5 items-center px-4 transition-all duration-1000 ${
          menu
            ? `left-0 right-0 opacity-100`
            : `left-[200px] -right-[600px] opacity-0`
        }`}
      >
        <div className="flex gap-10">
          <Link href={`/dashboard/team/`}>
            <FaHome className="h-12 w-12 rounded-md p-2" />
          </Link>
          <Signout />
        </div>
        <div className="flex">
          <VscChromeClose
            className="text-zinc-300 text-5xl rounded-md p-2 mt-[3px]"
            onClick={handleMenu}
          />
        </div>
      </div> */}

      {/* <div className="absolute right-0 -top-14 h-14 rounded-tl-md px-4">
          <div className="flex gap-2 justify-between px-4">
            <Link
              href={`/dashboard/team/`}
              className="rounded-full bg-Zinc-950"
            >
              <FaHome className="h-12 w-12 rounded-md p-2" />
            </Link>
            <Signout />
          </div>
        </div> */}
      {teamID ? (
        <>
          <div
            className={`fixed left-0 bottom-0 right-0 h-14 bg-gradient-to-t from-zinc-950 from-30% to-transparent z-50 px-4`}
          >
            <div
              className={`absolute -top-32 rounded-tl-md gap-4 flex-col flex transition-all duration-300 ease-in-out ${
                menu ? "right-6" : "-right-20"
              }`}
            >
              <div className="bg-zinc-950 border-2 border-teal-700 rounded-full h-12 w-12 flex items-center justify-center">
                <Signout />
              </div>
              <div className="bg-zinc-950 border-2 border-teal-700 rounded-full h-12 w-12 flex items-center justify-center">
                <Link
                  href={`/dashboard/team/`}
                  className="rounded-full bg-Zinc-950"
                >
                  <FaHome className="h-12 w-12 rounded-md p-3" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-5 h-14 items-center relative">
              <div className="flex justify-center text-2xl text-zinc-100 relative">
                <Link
                  href={`/dashboard/team/${teamName}/${teamID}`}
                  className="flex w-full justify-center"
                >
                  <FaShieldAlt
                    className={`${
                      pathname === `/dashboard/team/${teamName}/${teamID}`
                        ? activeStyle
                        : `absolute -top-3`
                    }`}
                  />
                </Link>
              </div>
              <div className="flex justify-center text-2xl text-zinc-100 relative">
                <Link
                  href={`/dashboard/team/players/${teamName}/${teamID}`}
                  className="flex w-full justify-center"
                >
                  <FaUsers
                    className={`${
                      pathname ===
                      `/dashboard/team/players/${teamName}/${teamID}`
                        ? activeStyle
                        : `absolute -top-3`
                    }`}
                  />
                </Link>
              </div>
              <div className="flex justify-center text-2xl text-zinc-100 relative">
                <Link
                  href={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
                  className="flex w-full justify-center"
                >
                  <FaStar
                    className={`${
                      pathname ===
                      `/dashboard/team/champion_pool/${teamName}/${teamID}`
                        ? activeStyle
                        : `absolute -top-3`
                    }`}
                  />
                </Link>
              </div>
              <div className="flex justify-center text-2xl text-zinc-100 relative">
                <Link
                  href={`/dashboard/team/schedule/${teamName}/${teamID}`}
                  className="flex w-full justify-center"
                >
                  <FaRegCalendarAlt
                    className={`${
                      pathname ===
                      `/dashboard/team/schedule/${teamName}/${teamID}`
                        ? activeStyle
                        : `absolute -top-3`
                    }`}
                  />
                </Link>
              </div>
              <div className="flex justify-center text-2xl">
                <GoGear onClick={handleMenu} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          className={`fixed left-0 bottom-0 right-0 py-4 bg-gradient-to-t from-zinc-950 to-transparent z-50 px-4`}
        >
          <div className="flex justify-between h-full">
            <Link href={`/dashboard/team/`} className="">
              <Image
                src="/assets/dummylab-logo-wt-w.png"
                alt=""
                height={20}
                width={60}
              />
            </Link>
            <Signout />
          </div>
        </div>

        // <div
        //   className={`absolute left-0 bottom-0 right-0 top-0 items-center px-4`}
        // >
        //   <div className="grid grid-cols-5 h-14 w-full bg-red-400">
        //     <div className="flex justify-center text-2xl text-zinc-400 relative">
        //       <Link
        //         href={`/dashboard/team/${teamName}/${teamID}`}
        //         className="flex w-full justify-center"
        //       >
        //         <FaShieldAlt
        //           className={`${
        //             pathname === `/dashboard/team/${teamName}/${teamID}`
        //               ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
        //               : `absolute -top-3`
        //           }`}
        //         />
        //       </Link>
        //     </div>
        //     <div className="flex justify-center text-2xl text-zinc-400 relative">
        //       <Link
        //         href={`/dashboard/team/players/${teamName}/${teamID}`}
        //         className="flex w-full justify-center"
        //       >
        //         <FaUsers
        //           className={`${
        //             pathname ===
        //             `/dashboard/team/players/${teamName}/${teamID}`
        //               ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
        //               : `absolute -top-3`
        //           }`}
        //         />
        //       </Link>
        //     </div>
        //     <div className="flex justify-center text-2xl text-zinc-400 relative">
        //       <Link
        //         href={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
        //         className="flex w-full justify-center"
        //       >
        //         <FaStar
        //           className={`${
        //             pathname ===
        //             `/dashboard/team/champion_pool/${teamName}/${teamID}`
        //               ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
        //               : `absolute -top-3`
        //           }`}
        //         />
        //       </Link>
        //     </div>
        //     <div className="flex justify-center text-2xl text-zinc-400 relative">
        //       <Link
        //         href={`/dashboard/team/schedule/${teamName}/${teamID}`}
        //         className="flex w-full justify-center"
        //       >
        //         <FaRegCalendarAlt
        //           className={`${
        //             pathname ===
        //             `/dashboard/team/schedule/${teamName}/${teamID}`
        //               ? `text-zinc-100 absolute -top-9 transition-all duration-300 ease-in-out bg-teal-600 h-12 w-12 p-2 rounded-md`
        //               : `absolute -top-3`
        //           }`}
        //         />
        //       </Link>
        //     </div>
        //     {/* <div className="flex justify-center text-2xl text-zinc-500 relative">
        //     <div className="flex w-full justify-center">
        //       <RiDashboard3Fill className="absolute -top-4" />
        //       <span className="bg-teal-800 rounded-md uppercase text-[10px] text-zinc-200 absolute text-center leading-none p-1 top-0">
        //         Soon
        //       </span>
        //     </div>
        //     </div> */}
        //     <div className="flex justify-center text-2xl">
        //       <GoGear onClick={handleMenu} />
        //     </div>
        //   </div>
        //   <div className="absolute left-[500px] -right-[500px] bottom-0 top-0 grid grid-cols-5 items-center px-4 bg-red-50">
        //     <Link href={`/dashboard/team/`}>
        //       <FaHome className="h-12 w-12 rounded-md p-2" />
        //     </Link>
        //     <Signout />
        //     <VscChromeClose
        //       className="text-zinc-300 text-5xl rounded-md p-2 mt-[3px]"
        //       onClick={handleMenu}
        //     />
        //   </div>
        // </div>
      )}
    </>
  );
};

export default BottomBarMobile;
