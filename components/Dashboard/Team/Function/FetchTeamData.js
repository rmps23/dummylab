import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchTeamData = (teamID) => {
  const queryKey = ["fetchTeamData", teamID];
  const { data, isLoading, error } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await await supabase
        .from("team")
        .select("*")
        .eq("id", teamID);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error };
};
