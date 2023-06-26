import { supabase } from "@supabase";

export const FetchChampions = async (playerID) => {
  try {
    const { data: champData, error: champError } = await supabase
      .from("champion")
      .select("*");

    if (champError) {
      throw champError;
    }

    return champData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
