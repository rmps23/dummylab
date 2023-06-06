import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CircularLoading = () => {
  return (
    <div className="text-teal-600">
      <CircularProgress size={30} className="text-teal-500" color="inherit" />
    </div>
  );
};

export default CircularLoading;
