import React from "react";
import Signout from "../Auth/Signout";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="bg-zinc-950">
      <div className="max-w-7xl mx-auto items-center justify-between flex px-2 py-3">
        <div>
          <Image
            src="/assets/dummylab-logo-w.png"
            alt=""
            width={25}
            height={25}
          />
        </div>
        <div>
          <Signout />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
