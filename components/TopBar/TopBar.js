import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopNavBar from "./TopNavBar";

import dynamic from "next/dynamic";
const Signout = dynamic(() => import("../Auth/Signout"));

const TopBar = () => {
  return (
    <>
      <div className="bg-zinc-950">
        <div className="max-w-7xl mx-auto items-center justify-between flex px-2 py-3">
          <div>
            <Link href="/dashboard/team" prefetch={false}>
              <Image
                src="/assets/dummylab-logo-w.png"
                alt=""
                width={25}
                height={25}
              />
            </Link>
          </div>
          <div>
            <Signout />
          </div>
        </div>
      </div>
      <TopNavBar />
    </>
  );
};

export default TopBar;
