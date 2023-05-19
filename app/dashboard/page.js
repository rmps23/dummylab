import TopBar from "../../components/dashboard/topbar/TopBar";
import SideBar from "../../components/dashboard/sidebar/SideBar";

const Dashboard = () => {
  return (
    <div className="bg-zinc-800">
      <TopBar />
      <div className="flex">
        <SideBar className="flex" />
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Dashboard;
