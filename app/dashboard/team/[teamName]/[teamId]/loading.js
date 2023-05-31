"use client";

import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <div>
      <div className="h-screen  items-center flex w-full">
        <div className="flex w-full">
          <CircularProgress className="mx-auto" color="inherit" size={25} />
        </div>
      </div>
    </div>
  );
}
