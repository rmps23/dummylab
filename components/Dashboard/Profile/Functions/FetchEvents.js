import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchEvents = (teamID) => {
  const queryKey = ["fetchEvents"];
  const {
    data: events,
    isLoading: evenstLoading,
    error: eventsError,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await supabase
        .from("event")
        .select("*")
        .eq("team_id", teamID);

      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { events, evenstLoading, eventsError };
};
