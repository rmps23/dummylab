import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNavBarLink = ({ text, link }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`flex items-center justify-center px-3 h-10 hover:bg-teal-800 transition ease-in-out duration-300 ${
        pathname === link
          ? "bg-zinc-900 hover:bg-zinc-900 shadow-lg shadow-teal-500/10"
          : ""
      }`}
      prefetch={false}
    >
      <span className="text-xs ">{text}</span>
    </Link>
  );
};

export default TopNavBarLink;
