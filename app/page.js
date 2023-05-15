"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://fpwrnfdqzvztmakmrdnc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwd3JuZmRxenZ6dG1ha21yZG5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNTk0MjcsImV4cCI6MTk5OTczNTQyN30.2LcL3jNeCPTMa5pEzW4bty7Gi-Ct4x7mrS_j8Hf9sw8"
);

export default function Home() {
  const [session, setSession] = useState(null);

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

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  };
  const getData = async () => {
    const { data, error } = await supabase.auth.getSession();

    console.log(session.user);
  };

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["twitch", "discord"]}
      />
    );
  } else {
    return (
      <div>
        Logged in!
        <br />
        <button onClick={() => signOut()} className="bg-red-500 p-2 rounded-md">
          Sign Out
        </button>
        <button
          onClick={() => getData()}
          className="bg-green-500 p-2 rounded-md"
        >
          Teste
        </button>
      </div>
    );
  }
}
