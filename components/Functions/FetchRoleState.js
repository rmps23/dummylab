import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchRoleState = () => {
  const queryKey = ["fetchRoleState"];
  const {
    data: roleState,
    isLoading: roleStateLoading,
    error: roleStateError,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await supabase.from("role_state").select("*");
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { roleState, roleStateLoading, roleStateError };
};
