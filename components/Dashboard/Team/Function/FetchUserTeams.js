import { supabase } from "@supabase";
import { FetchSession } from "@components/Functions/FetchSession";
import { useQuery } from "react-query";

export const FetchUserTeams = () => {
  const queryKey = ["fetchUserTeams"];
  const {
    data: userTeams,
    isLoading: userTeamsLoading,
    error: userTeamsError,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const userID = await FetchSession();
      const { data, error } = await supabase
        .from("team")
        .select("*")
        .eq("user_id", userID);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { userTeams, userTeamsLoading, userTeamsError };
};
