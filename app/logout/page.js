import React from "react";

const page = () => {
  return <div>{supabase.auth.signOut()}</div>;
};

export default page;
