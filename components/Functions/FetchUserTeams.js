import { supabase } from "@supabase";
import { FetchSession } from "@components/Functions/FetchSession";

export const FetchUserTeams = async () => {
  try {
    const userID = await FetchSession();

    const { data: teamData, error: teamError } = await supabase
      .from("team")
      .select("*")
      .eq("user_id", userID);

    if (teamError) {
      throw teamError;
    }

    return teamData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
