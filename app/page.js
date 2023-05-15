"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  "https://YOUR_PROJECT.supabase.co",
  "YOUR_SUPABASE_ANON_KEY"
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
