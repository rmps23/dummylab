import { supabase } from "@supabase";

export const FetchPool = async (playerID) => {
  try {
    const { data: poolData, error: poolError } = await supabase
      .from("pool")
      .select("*, champion(id, name, image)")
      .eq("player_id", playerID);

    if (poolError) {
      throw poolError;
    }

    return poolData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
