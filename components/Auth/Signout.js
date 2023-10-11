"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../supabase";
import { AiOutlinePoweroff } from "react-icons/ai";
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
            <span className="flex gap-2 items-center bg-zinc-800 justify-center px-2 pt-2 pb-0 rounded-md">
              <CircularLoading size={16} color={"text-zinc-300"} />
            </span>
          </>
        ) : (
          <span className="flex gap-2 items-center hover:bg-zinc-800 px-2 py-1 rounded-md">
            <AiOutlinePoweroff /> Logout
          </span>
        )}
      </button >
    </>
  );
};

export default Signout;
