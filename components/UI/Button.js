import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-gradient-to-r from-teal-600 to-teal-800 px-4 py-3 leading-none text-[12px] uppercase rounded-md hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-200">
      {text}
    </button>
  );
};

export default Button;
