import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-teal-700 px-4 py-4 leading-none text-[12px] uppercase rounded-sm hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300">
      {text}
    </button>
  );
};

export default Button;
