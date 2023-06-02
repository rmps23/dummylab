import React from "react";
import { ListItem, ListItemText } from "@mui/material";

const ListItemLink = ({ link, primary }) => {
  return (
    <a href={link}>
      <div className="h-20 w-28 bg-zinc-900 justify-center rounded-md items-center flex shadow-md shadow-zinc-950/20 border-2 border-zinc-900/10">
        <span className="text-[10px] uppercase text-teal-300 font-normal">
          {primary}
        </span>
      </div>
    </a>
  );
};

export default ListItemLink;
