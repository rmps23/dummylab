"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import ButtonModal from "components/Items/ButtonModal";

import TopBar from "components/TopBar/TopBar";
import TeamName from "components/Dashboard/Team/TeamName";
import Modal from "components/Items/Modal";
import CheckTeamPlayers from "components/Dashboard/Players/CheckTeamPlayers";
const AddPlayer = dynamic(() => import("components/Dashboard/Forms/AddPlayer"));

export default function Players() {
  const params = useParams();
  const [teamName, setTeamName] = useState();
  const [teamID, setTeamID] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTeamName(params.teamName);
    setTeamID(params.teamId);
    setIsLoading(false);
  }, []);

  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-screen py-5 px-2">
        <div className="max-w-7xl mx-auto py-4 px-2">
          {isLoading ? (
            <CircularProgress
              size={20}
              className="text-teal-500"
              color="inherit"
            />
          ) : (
            <>
              <TeamName teamName={teamName} />
              <div>
                <div className="mb-5">
                  <ButtonModal click={handleClickOpen} text={"Create Player"} />
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: { backgroundColor: "#18181b", borderRadius: "0" },
                    }}
                  >
                    <Modal
                      form={<AddPlayer teamID={teamID} teamName={teamName} />}
                      handleClose={handleClose}
                    />
                  </Dialog>
                </div>

                <CheckTeamPlayers teamID={teamID} teamName={teamName} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
