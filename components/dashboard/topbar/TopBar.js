import React from "react";
import Signout from "../topbar/Signout";

const TopBar = () => {
  return (
    <div className="bg-neutral-950 shadow-md shadow-teal-950 flex justify-between h-14 items-center px-6">
      <div>
        <img src="assets/dummylab-logo-w.png" alt="" width={25} />
      </div>
      <div>
        <Signout />
      </div>
    </div>
  );
};

export default TopBar;
