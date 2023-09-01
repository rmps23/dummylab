import React from "react";
import { FaLink } from "react-icons/fa";
import copy from "copy-to-clipboard";

const ShareLink = () => {
  const handleCopyToClipboard = () => {
    copy("teste23");
    alert("Copied to clipboard!");
  };

  return (
    <div
      className="bg-teal-700 hover:bg-teal-600 text-zinc-300 px-4 py-2 rounded-md cursor-pointer transition-all duration-200"
      onClick={handleCopyToClipboard}
    >
      <span className="text-sm uppercase font-light flex items-center gap-2">
        Share Link
        <FaLink />
      </span>
    </div>
  );
};

export default ShareLink;
