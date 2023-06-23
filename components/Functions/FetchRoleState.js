import { supabase } from "@supabase";

export const FetchRoleState = async () => {
  try {
    const { data: roleData, error: roleError } = await supabase
      .from("role_state")
      .select("*");

    if (roleError) {
      throw roleError;
    }

    return roleData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};
