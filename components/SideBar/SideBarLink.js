import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarLink = ({ icon, link, text }) => {
  const pathname = usePathname();
  console.log(pathname);
  console.log(link);

  return (
    <>
      <Link
        href={link}
        className={`flex items-center gap-4 rounded-l-md py-2 px-4 ml-6  ${
          link == pathname ? "bg-teal text-black" : "bg-dark hover:bg-black"
        }`}
      >
        <span className="">{icon}</span>
        <span>{text}</span>
      </Link>
    </>
  );
};

export default SideBarLink;
