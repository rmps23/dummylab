"use client";

import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const Signout = () => {
  const router = useRouter();
  const [session, setSession] = useState(null);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push("/");
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <button
      onClick={() => signOut()}
      className="bg-teal-500 text-xs py-2 px-3 text-neutral-800 font-semibold hover:opacity-90"
    >
      SIGN OUT
    </button>
  );
};

export default Signout;
