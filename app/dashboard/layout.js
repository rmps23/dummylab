"use client";

import SideBar from "@components/SideBar/SideBar";
import BottomBarMobile from "@components/SideBar/BottomBarMobile";
import { QueryClient, QueryClientProvider } from "react-query";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const url = usePathname();

  if (url.includes("player_view")) {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <div className="">{children}</div>
        </QueryClientProvider>
      </>
    );
  } else {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <div className="hidden sm:flex">
            <SideBar />
          </div>
          <div className="sm:hidden">
            <BottomBarMobile />
          </div>
          <div className="sm:pl-[112px] sm:p-8 p-4">{children}</div>
        </QueryClientProvider>
      </>
    );
  }
}
