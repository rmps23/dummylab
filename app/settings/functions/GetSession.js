import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const GetSession = () => {
  const queryKey = ["getSession"];
  const {
    data: session,
    error: sessionError,
  } = useQuery(queryKey, {
    queryFn: async () => {

      const { data: { user } } = await supabase.auth.getUser()
      return user;
    },
    refetchOnWindowFocus: false,
  });

  return { session, sessionError };
};
