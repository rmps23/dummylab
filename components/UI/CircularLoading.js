import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const CircularLoading = ({ menu, white }) => {
  return (
    <div className="text-teal-600">
      <CircularProgress
        size={menu ? 18 : 30}
        className={
          menu ? "text-red-800" : white ? "text-white" : "text-teal-500"
        }
        color="inherit"
      />
    </div>
  );
};

export default CircularLoading;
