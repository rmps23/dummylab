"use client";

import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "-1px",
  left: "-1px",
  right: "-1px",
  bottom: "-1px",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(10px)",
  padding: "4px",
  paddingTop: "10px",
};

export default function ModalUI({
  btn,
  icon,
  classes,
  form,
  title,
  closeModal,
  setCloseModal,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
      setCloseModal(false);
    }, 1000);
  }, [closeModal]);

  return (
    <div>
      <div onClick={handleOpen} className={`${classes}`}>
        <div className="flex items-center">
          <span className="bg-teal-500 py-[12px] px-2 rounded-r-sm opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-0 group-hover:-right-[30px] text-[14px] -z-10">
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
            <div className="max-w-[1000px] mx-auto pt-48 px-5 relative">
              <p className="text-2xl text-teal-500 text-center absolute left-5 top-14 uppercase">
                {title}
              </p>
              <span
                onClick={handleClose}
                className="absolute text-zinc-500 top-11 right-5 cursor-pointer text-md h-10 w-10 border-2 font-bold border-zinc-500 hover:text-teal-500 hover:border-teal-500 transition rounded-full flex items-center justify-center"
              >
                &#10005;
              </span>
              {form}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
