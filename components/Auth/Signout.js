"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../supabase";
import { BiLogOut } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useParams } from "next/navigation";

import CircularLoading from "@components/UI/CircularLoading";

const Signout = ({ hover }) => {
  const router = useRouter();
  const params = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) {
          throw error;
        }
      } catch (error) {
        console.error("Logout error:", error.message);
      } finally {
        router.push("/");
      }
    }, 1000);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <button onClick={() => signOut()}>
        {loading ? (
          <>
            <div className="bg-zinc-900 rounded-md h-10 mx-2 items-center justify-center transition-all hidden sm:flex">
              <span className="text-2xl transition-all">
                <CircularLoading size={18} color={"text-red-500"} />
              </span>
            </div>
            <div>
              <CircularLoading size={18} color={"text-red-500"} />
            </div>
          </>
        ) : (
          <>
            <div className="bg-teal-700 hover:bg-teal-700/80 rounded-md py-2 mx-2 h-10 transition-all group hidden sm:flex">
              <span className="pl-3 text-2xl group-hover:text-zinc-300 transition-all">
                <BiLogOut />
              </span>
              <span
                className={`opacity-0 transition-all pt-[1px] ml-0 text-md group-hover:text-zinc-300 ${
                  hover === true && "opacity-100 pl-2 group-hover:pl-3"
                }`}
              >
                Logout
              </span>
            </div>
            {params.teamId ? (
              <div className="sm:hidden text-3xl text-red-800 rounded-md p-2">
                <RiLogoutBoxRLine />
              </div>
            ) : (
              <div className="sm:hidden text-2xl">
                <RiLogoutBoxRLine />
              </div>
            )}
          </>
        )}
      </button>
    </>
  );
};

export default Signout;
