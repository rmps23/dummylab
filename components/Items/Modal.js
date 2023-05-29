import React from "react";

const AddPlayer = ({ form, handleClose }) => {
  return (
    <div className="py-14 px-10 pt-20 md:min-w-[400px]">
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
