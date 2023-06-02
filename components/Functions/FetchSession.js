import { supabase } from "@supabase";

export const FetchSession = async () => {
  try {
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();
    if (sessionError) {
      throw sessionError;
    }

    return sessionData.session.user.id;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
