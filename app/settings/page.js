"use client"

import React from "react";
import { GetSession } from "./functions/GetSession";

const Settings = () => {
  const { session, sessionError } = GetSession();

  console.log(session);
  return <div>
    <p>
      Name:{session.user_metadata.full_name}
    </p>
  </div>;
};

export default Settings;
