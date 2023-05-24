import React from "react";

const TopNavBarLink = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      className="flex items-center justify-center px-2 first-of-type:border-l border-r border-l-zinc-950/20 border-r-zinc-950/20 h-10 hover:bg-teal-800 transition ease-in-out duration-300"
    >
      {icon}
      <span className="text-xs ml-1">{text}</span>
    </a>
  );
};

export default TopNavBarLink;
