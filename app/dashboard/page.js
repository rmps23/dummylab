import TopBar from "../../components/dashboard/topbar/TopBar";
import AddTeam from "../../components/dashboard/AddTeam";
import ReadTeam from "../../components/dashboard/ReadTeam";

const Dashboard = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <TopBar />
      <div className="max-w-7xl mx-auto py-10 px-2">
        <AddTeam />
        <ReadTeam />
      </div>
    </div>
  );
};

export default Dashboard;
