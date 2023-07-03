"use client";

import { Drawer, List } from "@mui/material";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useParams } from "next/navigation";

import ListItemLink from "./ListItemLink";
import Signout from "../../Auth/Signout";

const TopNavBar = () => {
  const [open, setOpen] = useState(false);
  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();

  const params = useParams();

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
  }, [params.teamId, params.teamName]);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto items-center flex py-2 md:hidden">
      <p onClick={toggleDrawer} className="text-3xl">
        <HiMenuAlt3 />
      </p>
      <Drawer open={open} onClose={toggleDrawer} className="border">
        <List className="bg-zinc-950 h-screen text-teal-500 box-border p-4">
          <div className="flex justify-between">
            <div
              onClick={closeDrawer}
              className="h-10 w-16 items-center justify-center bg-teal-600 rounded-md mb-8 flex"
            >
              <span className="text-zinc-950 flex">
                <MdOutlineArrowBackIosNew />
              </span>
            </div>
            <Signout icon={<AiOutlinePoweroff />} />
          </div>

          {params.teamId ? (
            <div className="grid grid-cols-2 gap-4">
              <ListItemLink link="/dashboard/team" primary="Teams" />
              <ListItemLink
                link={`/dashboard/team/${teamName}/${teamID}`}
                primary="Profile"
              />
              <ListItemLink
                link={`/dashboard/team/players/${teamName}/${teamID}`}
                primary="Players"
              />
              <ListItemLink
                link={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
                primary="Champion Pool"
              />
              <ListItemLink
                link={`/dashboard/team/schedule/${teamName}/${teamID}`}
                primary="Schedule"
              />
              {/* <ListItemLink link="#" primary="Analytics" /> */}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <ListItemLink link="/dashboard/team" primary="Teams" />
            </div>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default TopNavBar;
