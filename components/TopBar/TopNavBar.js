"use client";

import React from "react";
import TopNavBarLink from "../TopBar/TopNavBarLink";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const TopNavBar = () => {
  const params = useParams();
  const [open, setOpen] = useState(false);

  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();

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
  console.log(params.teamId);
  return (
    <div className="bg-teal-700 ">
      <div className="max-w-7xl mx-auto items-center hidden md:flex">
        {params.teamId ? (
          <>
            <TopNavBarLink text={"Teams"} link="/dashboard/team" />
            <TopNavBarLink
              text={"Profile"}
              link={`/dashboard/team/${teamName}/${teamID}`}
            />
            <TopNavBarLink text={"Players"} link="/#" />
            <TopNavBarLink text={"Champion Pool"} link="/#" />
            <TopNavBarLink text={"Analytics"} link="/#" />
            <TopNavBarLink text={"Schedule"} link="/#" />
          </>
        ) : (
          <TopNavBarLink text={"Teams"} link="/dashboard/team" />
        )}
      </div>
      <div className="max-w-7xl mx-auto items-center flex py-2 px-4 md:hidden">
        <p onClick={toggleDrawer} className="text-2xl">
          &#9776;
        </p>
        <Drawer open={open} onClose={toggleDrawer}>
          <List className="bg-zinc-900 h-screen text-teal-500 p-0">
            <ListItem
              onClick={closeDrawer}
              className="w-80 justify-center border-b-2 border-teal-500/20 py-5 bg-teal-500"
            >
              <p className="text-zinc-950">Close</p>
            </ListItem>

            {params.teamId ? (
              <>
                <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
                  <a href="/dashboard/team" className="flex items-center">
                    <ListItemText primary="Teams" />
                  </a>
                </ListItem>
                <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
                  <a
                    href={`/dashboard/team/${teamName}/${teamID}`}
                    className="flex items-center"
                  >
                    <ListItemText primary="Profile" />
                  </a>
                </ListItem>
                <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
                  <a href="/dashboard/team" className="flex items-center">
                    <ListItemText primary="Players" />
                  </a>
                </ListItem>
                <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
                  <a href="/dashboard/team" className="flex items-center">
                    <ListItemText primary="Champion Pool" />
                  </a>
                </ListItem>
                <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
                  <a href="/dashboard/team" className="flex items-center">
                    <ListItemText primary="Analytics" />
                  </a>
                </ListItem>
                <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
                  <a href="/dashboard/team" className="flex items-center">
                    <ListItemText primary="Schedule" />
                  </a>
                </ListItem>
              </>
            ) : (
              <ListItem className="w-80 justify-center border-b-2 border-teal-500/20">
                <a href="/dashboard/team" className="flex items-center">
                  <ListItemText primary="Teams" />
                </a>
              </ListItem>
            )}
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default TopNavBar;
