import React from "react";

const SideLink = ({ text, icons }) => {
  return (
    <a
      href="#"
      className="flex items-center py-1 pr-4 bg-teal-600 text-zinc-900 font-semibold rounded-sm hover:bg-neutral-200 transition ease-in-out duration-300"
    >
      <p className="mx-2">{icons}</p>
      <p className="text-sm">{text}</p>
    </a>
  );
};

export default SideLink;
