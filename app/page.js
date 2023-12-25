import Image from "next/image";
import Link from "next/link";

import Signup from "../components/Auth/Signup";
import { RiLoginCircleLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <section className="homepage-bg">
        <div className="h-screen max-w-[1240px] px-5 py-8 mx-auto flex justify-between">
          <div>
            <Image
              src={"/assets/dummylab-logo.svg"}
              height={0}
              width={100}
            ></Image>
          </div>
          <div>
            <Link
              href={"/login"}
              className="text-teal-500 text-sm font-medium flex items-center"
            >
              <span className="pt-1">LOGIN </span>
              <RiLoginCircleLine className="text-xl ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 mx-auto mt-24 bg-zinc-800">
        <div className="max-w-[1240px] flex justify-between mx-auto">
          <div>
            <p className="text-5xl font-bold italic">ELEVATE YOUR GAME</p>
            <p className="font-thin text-lg max-w-lg text-zinc-300 leading-[20px] mt-4">
              Guide and Enhance Your Team's Performance with the Ultimate
              Coaching Experience!
            </p>
          </div>
          <div>
            <Signup></Signup>
          </div>
        </div>
      </section>

      {/* <section
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
      </section> */}
    </>
  );
};

export default Home;
