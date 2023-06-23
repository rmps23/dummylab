import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CircularLoading = ({ menu }) => {
  return (
    <div className="text-teal-600">
      <CircularProgress
        size={menu ? 15 : 30}
        className="text-teal-500"
        color="inherit"
      />
    </div>
  );
};

export default CircularLoading;
