import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchTeamData = (teamID) => {
  const { data, isLoading, error } = useQuery({
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
