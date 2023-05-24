import React from "react";

const Button = ({ text }) => {
  return (
    <button className="text-sm bg-teal-600 text-neutral-100  px-3 py-1 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/20 transition ease-in-out duration-300">
      {text}
    </button>
  );
};

export default Button;
