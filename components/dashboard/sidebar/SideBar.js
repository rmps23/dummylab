import React from "react";
import SideLink from "./SideLink";

import { CgClose } from "react-icons/cg";
import { RiUser3Fill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="w-auto bg-neutral-950 h-screen shadow-mr shadow-teal-500">
      <div className="flex-col p-2">
        <div className="mb-2">
          <SideLink text="Players" icons={<RiUser3Fill />} />
        </div>
        <div>
          <SideLink text="Team" icons={<RiUser3Fill />} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
