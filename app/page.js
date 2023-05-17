import Signup from "../components/Signup";
import Hero from "../components/homepage/Hero";
import Section2 from "../components/homepage/Section2";
import Footer from "../components/homepage/Footer";

const Home = () => {
  return (
    <>
      <section
        id="hero"
        className="items-center justify-center h-screen flex bg-gradient-to-br from-zinc-950 from-80%  to-teal-600 to-20% "
      >
        <div className="bg-stone-950 w-full h-full absolute opacity-80 bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className="flex items-center mr-96">
            <Hero />
          </div>
          <div className="flex">
            <Signup />
          </div>
        </div>
      </section>
      <section className="items-center justify-center h-screen flex bg-black">
        <div className="bg-stone-950 w-full h-full absolute opacity-100  bg-opacity-50 backdrop-filter backdrop-blur-lg"></div>
        <Section2 />
      </section>
      <section className="items-center justify-center h-auto flex bg-neutral-200 py-10">
        <Footer />
      </section>
    </>
  );
};

export default Home;
