import React from "react";
import { FaLink } from "react-icons/fa";
import copy from "copy-to-clipboard";

const ShareLink = () => {
  const handleCopyToClipboard = () => {
    copy("teste23");
    alert("Copied to clipboard!");
  };

  return (
    <div className="">
      <div
        className="cursor-pointer bg-zinc-950 text-zinc-300 p-4 px-10 relative rounded-md items-center flex gap-2 justify-between hover:shadow-lg hover:shadow-teal-400/10  transition-all duration-300"
        onClick={handleCopyToClipboard}
      >
        <span className="text-3xl uppercase text-teal-500 font-light">
          Share Link
        </span>
        <span className="text-4xl bg-teal-700 w-20 h-20 items-center justify-center flex rounded-full">
          <FaLink />
        </span>
      </div>
    </div>
  );
};

export default ShareLink;
