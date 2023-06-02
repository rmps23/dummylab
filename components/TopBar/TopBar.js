import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import TopNavBar from "./TopNavBar";
import TopNavBarMobile from "./Mobile/TopNavBarMobile";
const Signout = dynamic(() => import("../Auth/Signout"));

const TopBar = () => {
  return (
    <>
      <div className="bg-zinc-950 fixed w-full z-40">
        <div className="max-w-7xl mx-auto items-center justify-between flex px-4 py-2 md:py-4">
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
          <div className="hidden md:block">
            <Signout />
          </div>
          <div className="md:hidden">
            <TopNavBarMobile />
          </div>
        </div>
      </div>
      <div className="pt-14 hidden md:block">
        <TopNavBar />
      </div>
    </>
  );
};

export default TopBar;
