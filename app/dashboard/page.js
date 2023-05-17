"use client";

import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const Dashboard = () => {
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

  console.log(session);

  return (
    <div>
      <button
        onClick={() => signOut()}
        className="bg-orange-500 p-2 rounded-md"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
