import { supabase } from "@supabase";

export const FetchTeamData = async (teamID) => {
  try {
    const { data: teamData, error: teamError } = await supabase
      .from("team")
      .select("*")
      .eq("id", teamID);

    if (teamError) {
      throw teamError;
    }

    return teamData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
