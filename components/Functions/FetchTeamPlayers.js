import { supabase } from "@supabase";
import { FetchSession } from "@components/Functions/FetchSession";

export const FetchUserTeams = async () => {
  try {
    const userID = await FetchSession();

    const { data: teamData, error: teamError } = await supabase
      .from("player")
      .select("*, team_id( * )")
      .eq("id", "6a099356-0fba-4cf3-bba0-faad80da700b");

    if (teamError) {
      throw teamError;
    }

    return teamData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
