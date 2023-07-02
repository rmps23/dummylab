import { supabase } from "@supabase";

export const FetchPlayerEvent = async (eventID) => {
  try {
    const { data: playersData, error: playersDataError } = await supabase
      .from("player_event")
      .select(" * , player_id (id, name, role(id, name, image_link))")
      .eq("event_id", eventID);

    if (playersDataError) {
      throw playersDataError;
    }

    const sortedArray = playersData.sort(
      (a, b) => a.player_id.role.id - b.player_id.role.id
    );

    return sortedArray;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
