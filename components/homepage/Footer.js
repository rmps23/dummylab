import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { RiCalendarTodoFill } from "react-icons/ri";
import { RiFundsBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex items-center text-left">
      <div className="mr-10">
        <img src="/assets/dummylab-logo.png" alt="" width={60} />
      </div>
      <div className="mx-10">
        <p className="text-neutral-700 font-bold text-5xl italic">
          JOIN THE LAB
        </p>
      </div>
      <div className="ml-10">
        <a
          href="#hero"
          className="bg-teal-500 px-8 py-4 font-semibold hover:bg-teal-600 transition ease-in-out duration-200"
        >
          SIGN UP
        </a>
      </div>
    </div>
  );
};

export default Footer;
