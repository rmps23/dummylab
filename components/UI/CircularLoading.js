import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CircularLoading = ({ size, color }) => {
  return (
    <div className="text-teal-600">
      <CircularProgress size={size} className={color} color="inherit" />
    </div>
  );
};

export default CircularLoading;
