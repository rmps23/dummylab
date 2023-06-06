"use client";

import React from "react";
// import Button from "../components/Items/Button";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="bg-zinc-900 h-screen items-center justify-center flex">
      <div className="flex-col text-center">
        <Image
          src="/assets/dummylab-logo-wt-w.png"
          alt=""
          width={200}
          height={200}
          className="mx-auto"
        />
        <img alt="" />
        <h1 className="text-2xl mt-10">404</h1>
        <h1 className="text-2xl mb-6">Page Not Found</h1>
        <p className="text-teal-500 mb-4">
          The page you are looking for does not exist.
        </p>

        <a href="/dashboard/team">
          <Button text="Go back to the dashboard"></Button>
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
