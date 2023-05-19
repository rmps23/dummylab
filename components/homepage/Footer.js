import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex max-w-7xl mx-auto text-neutral-800 font-semibold gap-20 justify-between">
      <ul>
        <li className="my-1">
          <a href="#" className="hover:opacity-80">
            Privacy Policy
          </a>
        </li>
        <li className="my-1">
          <a href="#" className="hover:opacity-80">
            Terms of Service
          </a>
        </li>
        <li className="my-1">
          <a href="#" className="hover:opacity-80">
            Help
          </a>
        </li>
        <li className="my-1">
          <a href="#" className="hover:opacity-80">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex flex-row align-top">
        <li className="items-center my-1 mx-5">
          <a href="#" className="text-sm mt-1 flex hover:opacity-80">
            <BsTwitter className="text-xl mr-1" />
            Twitter
          </a>
        </li>
        <li className="items-center my-1 mx-5">
          <a href="#" className="text-sm mt-1 flex hover:opacity-80">
            <BsDiscord className="text-xl mr-1" />
            Discord
          </a>
        </li>
        <li className="items-center my-1 mx-5">
          <a href="#" className="text-sm mt-1 flex hover:opacity-80">
            <BsFillEnvelopeFill className="text-xl mr-1" />
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
