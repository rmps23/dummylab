"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../supabase";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

const Signout = () => {
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
        setLoading(false);
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
    <button
      onClick={() => signOut()}
      className="text-teal-500 text-xs font-semibold hover:text-neutral-100 transition ease-in-out duration-300"
    >
      {loading ? (
        <span className="flex">
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress className="mr-2" color="inherit" size={25} />
          </Backdrop>
        </span>
      ) : (
        <span>SIGN OUT</span>
      )}
    </button>
  );
};

export default Signout;
