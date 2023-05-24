"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="flex-col w-full justify-center">
      <img
        src="assets/dummylab-logo-wt-w.png"
        className="z-20 relative mx-auto mb-2 lg:ml-0"
        width={250}
      />
      <Fade
        cascade
        className="text-teal-500 font-semibold text-xs italic mb-8 w-full text-center md:text-md lg:text-xl"
        damping={0.1}
        duration={200}
      >
        Ultimate League of Legends Coaching Dashboard!
      </Fade>
    </div>
  );
};

export default Hero;
