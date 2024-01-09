"use client";

//NEXTJS
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

//DUMMYLAB
import SideBarLink from "./SideBarLink";
import Signout from "@components/Auth/Signout";
import ChooseTeam from "@components/Dashboard/Team/ChooseTeam";

//LIBS
import { FaLayerGroup } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const SideBar = () => {
  const params = useParams();
  const [teamID, setTeamID] = useState();
  const [teamName, setTeamName] = useState();

  useEffect(() => {
    setTeamID(params.teamId);
    setTeamName(params.teamName);
  }, [params]);

  return (
    <>
      <div className="bg-dark w-64 h-screen">
        <div className="w-full flex flex-col py-8">
          <div className="mb-10 px-6">
            <Image
              src={"/assets/dummylab-logo.svg"}
              width={120}
              height={0}
              alt=""
            ></Image>
          </div>
          <div className="flex-col gap-4 flex">
            <SideBarLink
              icon={<FaLayerGroup />}
              link="/dashboard/team"
              text="Teams"
            />
            {teamID && (
              <>
                <SideBarLink
                  icon={<FaShieldAlt />}
                  link={`/dashboard/team/${teamName}/${teamID}`}
                  text="Profile"
                />
                <SideBarLink
                  icon={<FaUsers />}
                  link={`/dashboard/team/players/${teamName}/${teamID}`}
                  text="Players"
                />
                <SideBarLink
                  icon={<FaStar />}
                  link={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
                  text="Pool"
                />
                <SideBarLink
                  icon={<FaRegCalendarAlt />}
                  link={`/dashboard/team/schedule/${teamName}/${teamID}`}
                  text={"Schedule"}
                />
              </>
            )}
          </div>

          {/* <div className="w-64 h-screen">
        <div className="overflow-hidden">
          <div className="pl-5 mb-8 flex" style={{ width: 200, height: 25 }}>
            <Link href="/dashboard/team">
              <Image
                src="/assets/dummylab-logo-w.png"
                alt=""
                width={25}
                height={25}
                priority="true"
              />
            </Link>
            <span
              className={`opacity-0 transition-all text-md group-hover:text-zinc-300`}
            >
              <Link href="/dashboard/team">
                <Image
                  src="/assets/dummylab-text.png"
                  alt=""
                  width={70}
                  height={0}
                  className="mt-[2px]"
                  priority="true"
                />
              </Link>
            </span>
          </div>

          {teamID && (
            <div className="flex-col flex gap-1">
              <SideBarLink
                icon={<FaHome />}
                link="/dashboard/team"
                text={"Home"}
              />
              <SideBarLink
                icon={<FaShieldAlt />}
                link={`/dashboard/team/${teamName}/${teamID}`}
                text={"Profile"}
              />
              <SideBarLink
                icon={<FaUsers />}
                link={`/dashboard/team/players/${teamName}/${teamID}`}
                text={"Players"}
              />
              <SideBarLink
                icon={<FaStar />}
                link={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
                text={"Pool"}
              />
              <SideBarLink
                icon={<FaRegCalendarAlt />}
                link={`/dashboard/team/schedule/${teamName}/${teamID}`}
                text={"Schedule"}
              />
            </div>
          )}
        </div>
        <Signout />
      </div> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
