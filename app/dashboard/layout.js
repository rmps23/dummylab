"use client";

import SideBar from "@components/SideBar/SideBar";
import SideBarMobile from "@components/SideBar/SideBarMobile";
import BottomBarMobile from "@components/SideBar/BottomBarMobile";
import { QueryClient, QueryClientProvider } from "react-query";
import Image from "next/image";
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="hidden sm:flex">
          <SideBar />
        </div>
        <div className="">
          <BottomBarMobile />
        </div>
        <div className="sm:pl-[112px] sm:p-8 p-4">{children}</div>
      </QueryClientProvider>
    </>
  );
}
