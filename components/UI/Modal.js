"use client";

import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import React from "react";

const style = {
  position: "absolute",
  top: "-1px",
  left: "-1px",
  right: "-1px",
  bottom: "-1px",
  backgroundColor: "rgba(20, 20, 22, 0.4)",
  backdropFilter: "blur(10px)",
  padding: "4px",
  paddingTop: "10px",
  overflowY: "scroll",
};

export default function ModalUI({ btn, icon, classes, form, title }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className={`${classes}`}>
        <div className="flex items-center">
          <span className="bg-teal-800 py-[12px] px-2 rounded-r-md opacity-0 group-hover:opacity-100 transition-all duration-200 absolute right-0 group-hover:-right-[30px] text-[14px] -z-10 text-zinc-50">
            {icon}
          </span>
          <span>{btn}</span>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="egClass">
            <div className="max-w-[1000px] mx-auto pt-36 px-5 relative">
              {/* <p className="text-2xl text-teal-500 text-center absolute left-5 top-12">
                {title}
              </p> */}
              <span
                onClick={handleClose}
                className="absolute text-zinc-400 top-11 right-5 cursor-pointer text-md h-10 w-10 border-2 font-bold border-zinc-500 hover:text-teal-500 hover:border-teal-500 transition rounded-full flex items-center justify-center"
              >
                &#10005;
              </span>
              {React.cloneElement(form, { setOpen: setOpen })}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
