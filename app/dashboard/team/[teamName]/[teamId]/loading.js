"use client";

import React from "react";
import CircularLoading from "@components/UI/CircularLoading";

const loading = () => {
  return (
    <div className="absolute right-0 top-0 bottom-0 left-0 bg-zinc-950/50 backdrop-blur-sm flex items-center justify-center">
      <CircularLoading size={20} color={"text-zinc-400"} />
    </div>
  );
};

export default loading;
