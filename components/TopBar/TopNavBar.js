"use client";

import React from "react";
import TopNavBarLink from "../TopBar/TopNavBarLink";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";

import { RiShieldFlashFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { GiStarFormation } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";
import { BsCalendarWeek } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const TopNavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="bg-teal-700 ">
      <div className="max-w-7xl mx-auto items-center hidden md:flex">
        <TopNavBarLink
          icon={<RiShieldFlashFill />}
          text={"Teams"}
          link="/dashboard/team"
        />
        <TopNavBarLink icon={<FaUsers />} text={"Players"} link="#" />
        <TopNavBarLink
          icon={<GiStarFormation />}
          text={"Champion Pool"}
          link="#"
        />
        <TopNavBarLink icon={<GrGraphQl />} text={"Analytics"} link="#" />
        <TopNavBarLink icon={<BsCalendarWeek />} text={"Schedule"} link="#" />
      </div>
      <div className="max-w-7xl mx-auto items-center flex py-2 px-2 md:hidden">
        <AiOutlineMenu onClick={toggleDrawer} className="text-2xl" />
        <Drawer open={open} onClose={toggleDrawer}>
          <List className="bg-zinc-900 h-screen text-teal-500 p-0">
            <ListItem className="w-80 justify-center border-b-2 border-teal-500/20 py-5 bg-teal-500">
              <p className="text-zinc-950">Menu</p>
            </ListItem>
            <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
              <a href="/dashboard/team" className="flex items-center">
                <RiShieldFlashFill className="mr-1" />
                <ListItemText primary="Teams" />
              </a>
            </ListItem>
            <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
              <a href="/dashboard/team" className="flex items-center">
                <FaUsers className="mr-1" />
                <ListItemText primary="Players" />
              </a>
            </ListItem>
            <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
              <a href="/dashboard/team" className="flex items-center">
                <GiStarFormation className="mr-1" />
                <ListItemText primary="Champion Pool" />
              </a>
            </ListItem>
            <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
              <a href="/dashboard/team" className="flex items-center">
                <GrGraphQl className="mr-1" />
                <ListItemText primary="Analytics" />
              </a>
            </ListItem>
            <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
              <a href="/dashboard/team" className="flex items-center">
                <BsCalendarWeek className="mr-1" />
                <ListItemText primary="Schedule" />
              </a>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default TopNavBar;
