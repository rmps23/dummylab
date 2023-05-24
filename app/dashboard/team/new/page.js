import TopBar from "../../../../components/TopBar/TopBar";
import NewTeamForm from "../../../../components/Dashboard/Team/NewTeamForm";

const NewTeam = () => {
  return (
    <>
      <TopBar />
      <div className="bg-zinc-900 h-screen py-5 px-2">
        <div className="max-w-7xl mx-auto p-6 bg-neutral-950/60">
          <NewTeamForm />
        </div>
      </div>
    </>
  );
};

export default NewTeam;
