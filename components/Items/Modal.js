import React from "react";

const AddPlayer = ({ form, handleClose }) => {
  return (
    <div className="p-14">
      {form}
      <p
        onClick={handleClose}
        className="text-teal-500 cursor-pointer absolute right-5 top-5"
      >
        &#10006;
      </p>
    </div>
  );
};

export default AddPlayer;
