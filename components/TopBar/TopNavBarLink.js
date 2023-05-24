import React from "react";
import Link from "next/link";

const TopNavBarLink = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="flex items-center justify-center px-3 first-of-type:border-l border-r border-l-zinc-950/20 border-r-zinc-950/20 h-10 hover:bg-teal-800 transition ease-in-out duration-300"
      prefetch={false}
    >
      <span className="text-xs font-semibold">{text}</span>
    </Link>
  );
};

export default TopNavBarLink;
