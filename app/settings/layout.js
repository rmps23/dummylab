"use client";

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
            <div className="rounded-md min-h-[500px]">
              {children}
            </div>
          </div>
        </QueryClientProvider>
      </>
    );
  }
}
