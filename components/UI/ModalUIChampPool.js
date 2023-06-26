"use client";

import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  width: "100%",
  bgcolor: "#18181b",
  border: "2px solid #18181b",
  boxShadow: 10,
  p: 2,
  borderRadius: "4px",
  paddingTop: 10,
  paddingBottom: 25,
  overflow: "auto",
  "@media (min-width: 768px)": {
    width: "70%",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
  },
};

export default function ModalUI({ btn, classes, form, title }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className={classes}>
        {btn}
      </button>
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
            <p className="text-sm text-teal-500 text-center absolute left-5 top-6 font-light uppercase">
              {title}
            </p>
            <span
              onClick={handleClose}
              className="absolute text-zinc-300 top-5 right-5 cursor-pointer"
            >
              &#10005;
            </span>
            {form}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
