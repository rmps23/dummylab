"use client";

import SideBar from "@components/SideBar/SideBar";
import SideBarMobile from "@components/SideBar/SideBarMobile";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="hidden sm:flex">
          <SideBar />
        </div>
        <div className="flex sm:hidden pt-4">
          <SideBarMobile />
        </div>
        <div className="sm:pl-24 sm:pr-4 p-4 sm:p-10">{children}</div>
      </QueryClientProvider>
    </>
  );
}
