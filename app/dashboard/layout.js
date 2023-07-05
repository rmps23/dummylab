import SideBar from "@components/SideBar/SideBar";
import SideBarMobile from "@components/SideBar/SideBarMobile";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="hidden sm:flex">
        <SideBar />
      </div>
      <div className="flex sm:hidden py-4">
        <SideBarMobile />
      </div>
      <div className="sm:pl-24 sm:pr-4 px-2 py-6 transition-all">
        {children}
      </div>
    </>
  );
}
