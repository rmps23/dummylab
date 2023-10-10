import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBarLink = ({ link, text }) => {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      className={`flex items-center ${link === pathname && "text-teal-400"}`}
    >
      {text}
    </Link>
  );
};

export default TopBarLink;
