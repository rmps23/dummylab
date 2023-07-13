"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../supabase";
import { BiLogOut } from "react-icons/bi";
import CircularLoading from "@components/UI/CircularLoading";

const Signout = ({ hover }) => {
  const router = useRouter();
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
          <div className="bg-zinc-900 rounded-md flex h-10 items-center justify-center transition-all">
            <span className="text-2xl transition-all">
              <CircularLoading size={18} color={"text-red-500"} />
            </span>
          </div>
        ) : (
          <div className="bg-teal-900/80 hover:bg-teal-900/50 rounded-md flex py-2 h-10 transition-all group">
            <span className="pl-4 text-2xl group-hover:text-zinc-300 transition-all">
              <BiLogOut />
            </span>
            <span
              className={`opacity-0 transition-all pt-[1px] ml-2 text-md group-hover:text-zinc-300 ${
                hover === true && "opacity-100 pl-2 group-hover:pl-3"
              }`}
            >
              Logout
            </span>
          </div>
        )}
      </button>
    </>
  );
};

export default Signout;
