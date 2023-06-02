"use client";

import { Drawer, List } from "@mui/material";
import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useParams } from "next/navigation";

import ListItem from "./ListItemLink";
import Signout from "../../Auth/Signout";

const TopNavBar = () => {
  const [open, setOpen] = useState(false);
  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();

  const params = useParams();

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
  }, []);

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
      <Drawer open={open} onClose={toggleDrawer}>
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
              <ListItem link="/dashboard/team" primary="Teams" />
              <ListItem
                link={`/dashboard/team/${teamName}/${teamID}`}
                primary="Profile"
              />
              <ListItem
                link={`/dashboard/team/players/${teamName}/${teamID}`}
                primary="Players"
              />
              <ListItem
                link={`/dashboard/team/champion_pool/${teamName}/${teamID}`}
                primary="Champion Pool"
              />
              <ListItem link="#" primary="Schedule" />
              <ListItem link="#" primary="Analytics" />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <ListItem link="/dashboard/team" primary="Teams" />
            </div>
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default TopNavBar;
