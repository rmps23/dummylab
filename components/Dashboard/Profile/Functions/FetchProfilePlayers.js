import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchProfilePlayers = (teamID) => {
  const queryKey = ["fetchPlayersLength", teamID];
  const {
    data: playersLength,
    isLoading: playersLoadingLength,
    error: playersErrorLength,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await supabase
        .from("player")
        .select("count")
        .eq("team_id", teamID);

      return data[0].count;
    },
    refetchOnWindowFocus: false,
  });

  return { playersLength, playersLoadingLength, playersErrorLength };
};
