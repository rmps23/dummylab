"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

//Components
import TopBar from "components/TopBar/TopBar";
import Modal from "components/Items/Modal";
import ButtonModal from "components/Items/ButtonModal";
const CheckTeam = dynamic(() => import("components/Dashboard/Team/CheckTeam"));
const NewTeam = dynamic(() => import("components/Dashboard/Forms/NewTeam"));

//UI Components
import Dialog from "@mui/material/Dialog";

const Team = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-screen py-5 px-2">
        <div className="max-w-7xl mx-auto py-4 px-2">
          <ButtonModal click={handleClickOpen} text={"Create Team"} />
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: { backgroundColor: "#18181b", borderRadius: "0" },
            }}
          >
            <Modal form={<NewTeam />} handleClose={handleClose} />
          </Dialog>
          <CheckTeam />
        </div>
      </div>
    </>
  );
};

export default Team;
