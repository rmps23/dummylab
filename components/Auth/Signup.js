"use client";

import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { supabase } from "../../supabase";

export default function Login() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="rounded-md flex-row text-center md:flex relative z-20">
        <div className="max-w-sm mx-auto bg-teal-600 rounded-sm p-10 md:w-96 shadow-lg shadow-stone-950">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["twitch", "discord"]}
          />
        </div>
      </div>
    );
  } else {
    router.push("/dashboard/team");
  }
}
