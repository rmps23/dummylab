import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchProfilePlayers = (teamID) => {
  const queryKey = ["fetchPlayersLength", teamID];
  const {
    data: players,
    isLoading: playersLoading,
    error: playersError,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await supabase
        .from("player")
        .select(
          " * , role (id, name, image_link) , role_state(id, name) , team(name)"
        )
        .eq("team_id", teamID);

      data.sort(function (a, b) {
        return a.role.id - b.role.id;
      });

      data.sort(function (a, b) {
        return a.role_state.id - b.role_state.id;
      });

      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { players, playersLoading, playersError };
};
