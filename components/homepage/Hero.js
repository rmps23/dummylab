"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="">
      <img src="assets/dummylab-logo-wt-w.png" className="flex z-20 relative" />
      <Fade
        cascade
        className="text-teal-500 font-semibold text-2xl italic my-4"
        damping={0.1}
        duration={200}
      >
        Ultimate League of Legends Coaching Dashboard!
      </Fade>
    </div>
  );
};

export default Hero;
