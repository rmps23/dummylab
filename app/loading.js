"use client";

import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export default function Loading() {
  return (
    <div>
      <div className="h-screen text-center">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress className="mr-2" color="inherit" size={25} />
        </Backdrop>
      </div>
    </div>
  );
}
