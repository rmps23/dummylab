import Signup from "../components/Auth/Signup";
import Hero from "../components/Homepage/Hero";
import Section2 from "../components/Homepage/Section2";
import Footer from "../components/Homepage/Footer";
import JoinLab from "../components/Homepage/JoinLab";

const Home = () => {
  return (
    <>
      <section
        id="hero"
        className="items-center justify-center h-screen flex bg-gradient-to-br from-zinc-950 from-80%  to-teal-600 to-20% "
      >
        <div className="bg-stone-950 w-full h-full absolute opacity-80 bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
        <div className=" mx-auto flex-col justify-between md:flex-row md:flex">
          <div className="flex items-center md:flex-1 md:mr-20 lg:mr-40 xl:mr-96">
            <Hero />
          </div>
          <div className="flex md:flex">
            <Signup />
          </div>
        </div>
      </section>
      {/* <section className="items-center justify-center h-screen flex bg-black py-20">
        <div className="bg-stone-950 w-full h-full absolute opacity-100  bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
        <Section2 />
      </section>
      <section className="items-center justify-center h-auto flex-col bg-neutral-200 py-10">
        <JoinLab />
      </section>
      <section className="h-auto bg-teal-500 py-10 px-2">
        <Footer />
      </section> */}
    </>
  );
};

export default Home;
