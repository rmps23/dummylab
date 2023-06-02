"use client";

import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#18181b",
  border: "2px solid #18181b",
  boxShadow: 10,
  p: 4,
  borderRadius: "4px",
  paddingTop: 10,
};

export default function ModalUI({ btn, classes, form }) {
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
