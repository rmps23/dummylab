import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarLink = ({ hover, icon, link, text }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`flex items-center py-2 group ${
        link === pathname ? "text-zinc-300" : "text-zinc-300/50"
      }`}
    >
      <span className="pl-[22px] text-xl group-hover:text-zinc-300 transition-all">
        {icon}
      </span>
      <span
        className={`opacity-0 transition-all pt-[4px] ml-2 text-md group-hover:text-zinc-300 ${
          hover === true && "opacity-100 pl-2 "
        }`}
      >
        {text}
      </span>
    </Link>
  );
};

export default SideBarLink;
