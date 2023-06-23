import { supabase } from "@supabase";

export const FetchPlayers = async (teamID) => {
  try {
    const { data: teamData, error: teamError } = await supabase
      .from("player")
      .select(
        " * , role (id, name, image_link) , role_state(id, name) , team(name)"
      )
      .eq("team_id", teamID);

    if (teamError) {
      throw teamError;
    }

    teamData.sort(function (a, b) {
      return a.role.id - b.role.id;
    });

    teamData.sort(function (a, b) {
      return a.role_state.id - b.role_state.id;
    });

    return teamData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
