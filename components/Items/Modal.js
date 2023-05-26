import React from "react";

const AddPlayer = ({ form, handleClose }) => {
  return (
    <div className="bg-zinc-900 border border-teal-500/50 p-4 text-zinc-100">
      {form}
      <p
        onClick={handleClose}
        className="text-teal-500 cursor-pointer absolute right-3 top-2"
      >
        &#10006;
      </p>
    </div>
  );
};

export default AddPlayer;
