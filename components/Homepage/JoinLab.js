import React from "react";

const JoinLab = () => {
  return (
    <div className="flex-col items-center text-left md:flex-row md:flex md:justify-center">
      <div className="mx-auto flex md:mx-0">
        <img
          src="/assets/dummylab-logo.png"
          alt=""
          width={60}
          className="mx-auto mb-6 md:mb-0"
        />
      </div>
      <div className="justify-center mb-10 flex md:mb-0 md:mx-10">
        <p className="text-neutral-700 font-bold text-2xl italic">
          JOIN THE LAB
        </p>
      </div>
      <div className="justify-center flex">
        <a
          href="#hero"
          className="bg-teal-500 px-8 py-4 font-semibold hover:bg-teal-600 transition ease-in-out duration-200"
        >
          SIGN UP
        </a>
      </div>
    </div>
  );
};

export default JoinLab;
