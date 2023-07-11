import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchRoles = () => {
  const queryKey = ["fetchRoles"];
  const {
    data: roles,
    isLoading: rolesLoading,
    error: rolesError,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await supabase.from("role").select("*");
      return data;
    },
    refetchOnWindowFocus: false,
  });

  return { roles, rolesLoading, rolesError };
};
