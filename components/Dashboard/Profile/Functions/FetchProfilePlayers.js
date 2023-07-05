import { supabase } from "@supabase";

export const FetchProfilePlayers = async (teamID) => {
  try {
    const { data, error } = await supabase
      .from("player")
      .select("*")
      .eq("team_id", teamID);

    if (error) {
      throw error;
    }

    return data.length;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
