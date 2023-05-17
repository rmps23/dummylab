import Signup from "../components/Signup";

const Home = () => {
  return (
    <div className="items-center justify-center h-screen pt-20">
      <div className="max-w-screen-xl mx-auto md:flex-row md:flex px-10">
        <div className="mb-24 md:flex-1 text-left">
          <img
            src="assets/dummylab-logo-wt-w.png"
            className="mx-auto w-60 md:mx-0"
          />
        </div>

        <Signup />
      </div>
    </div>
  );
};

export default Home;
