import { supabase } from "@supabase";
import { FetchSession } from "@components/Functions/FetchSession";

export const FetchEvents = async (teamID) => {
  try {
    const userID = await FetchSession();
    const { data: eventData, error: eventError } = await supabase
      .from("event")
      .select(" * ")
      .eq("user_id", userID)
      .select();

    if (eventError) {
      throw eventError;
    }

    return eventData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
