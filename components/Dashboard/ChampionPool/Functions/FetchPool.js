import { supabase } from "@supabase";
import { useQuery } from "react-query";
import { useEffect } from "react";

export const FetchPool = (playerID, updatePool) => {
  const queryKey = ["fetchPool", playerID];
  const {
    data: pool,
    isLoading: poolLoading,
    error: poolError,
    refetch: refetchPool,
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

  useEffect(() => {
    if (updatePool) {
      refetchPool();
    }
  }, [updatePool, refetchPool]);

  return { pool, poolLoading, poolError };
};
