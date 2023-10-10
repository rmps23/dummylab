"use client";

import SideBar from "@components/Navbar/SideBar";
import BottomBarMobile from "@components/Navbar/BottomBarMobile";
import { QueryClient, QueryClientProvider } from "react-query";
import { usePathname } from "next/navigation";
import TopBar from "@components/Navbar/TopBar";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  const url = usePathname();

  if (url.includes("player_schedule")) {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <div className="flex justify-center mt-40">{children}</div>
        </QueryClientProvider>
      </>
    );
  } else {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <div className="hidden sm:flex">
            <TopBar />
          </div>
          <div className="sm:hidden">
            <BottomBarMobile />
          </div>
          <div className="w-full px-40">
            <div className="bg-zinc-800 rounded-md min-h-[500px] p-4">
              {children}
            </div>
          </div>
        </QueryClientProvider>
      </>
    );
  }
}
