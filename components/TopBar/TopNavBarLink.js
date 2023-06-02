import React from "react";
import { usePathname } from "next/navigation";

const TopNavBarLink = ({ text, link }) => {
  const pathname = usePathname();

  return (
    <a
      href={link}
      className={`bg-teal-700 flex items-center px-4 py-2 rounded-sm transition ease-in-out duration-300 mr-2 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/10 ${
        pathname === link &&
        "bg-zinc-950 text-zinc-300 hover:bg-zinc-950 border border-teal-700 hover:shadow-none"
      }`}
    >
      <span className="text-xs">{text}</span>
    </a>
  );
};

export default TopNavBarLink;
