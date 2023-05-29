import React from "react";

const CancelButton = ({ text, handleCloseRemoveModal }) => {
  return (
    <button
      onClick={handleCloseRemoveModal}
      className="text-sm border border-zinc-950 text-neutral-400 bg-zinc-950 px-3 py-1 hover:text-teal-500 transition ease-in-out duration-300 rounded-sm"
    >
      {text}
    </button>
  );
};

export default CancelButton;
