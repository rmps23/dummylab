import React from "react";
import { usePathname } from "next/navigation";

const TopNavBarLink = ({ text, link }) => {
  const pathname = usePathname();

  return (
    <a
      href={link}
      className={`px-4 py-2 items-center text-center ${
        link === pathname
          ? "bg-zinc-950 text-teal-600 border-b border-teal-500/50"
          : "hover:bg-teal-600 transition ease-in-out duration-100"
      }`}
    >
      <span className="text-xs">{text}</span>
    </a>
  );
};

export default TopNavBarLink;
