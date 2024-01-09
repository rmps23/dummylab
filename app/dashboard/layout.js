"use client";

import SideBar from "@components/SideBar/Navbar";
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
      <div className="flex">
        <QueryClientProvider client={queryClient}>
          <SideBar />
          {/* <BottomBarMobile /> */}
          <div className="p-2">{children}</div>
        </QueryClientProvider>
      </div>
    );
  }
}
