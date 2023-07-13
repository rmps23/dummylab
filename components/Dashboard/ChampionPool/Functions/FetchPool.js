import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchPool = (playerID) => {
  const queryKey = ["fetchPool", playerID];
  const {
    data: pool,
    isLoading: poolLoading,
    error: poolError,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await supabase
        .from("pool")
        .select("*, champion(id, name, image)")
        .eq("player_id", playerID);

      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { pool, poolLoading, poolError };
};
