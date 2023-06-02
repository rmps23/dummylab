import React from "react";
import { usePathname } from "next/navigation";

const ListItemLink = ({ link, primary }) => {
  const pathname = usePathname();

  return (
    <a href={link}>
      <div
        className={`h-16 w-24 bg-zinc-900 justify-center rounded-md items-center flex shadow-md shadow-zinc-950/20 border-2 border-zinc-900/10 ${
          pathname === link ? "bg-teal-700/80" : ""
        }`}
      >
        <span
          className={`text-[10px] uppercase text-teal-300 font-normal ${
            pathname === link ? "text-zinc-300" : ""
          }`}
        >
          {primary}
        </span>
      </div>
    </a>
  );
};

export default ListItemLink;
