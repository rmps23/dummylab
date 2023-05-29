import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";

const CheckPlayerRole = ({ role }) => {
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (role === "Top") {
      setRoleData(
        "https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/roles/top.png"
      );
    } else if (role === "Jungler") {
      setRoleData(
        "https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/roles/jungle.png"
      );
    } else if (role === "Mid") {
      setRoleData(
        "https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/roles/mid.png"
      );
    } else if (role === "Bottom") {
      setRoleData(
        "https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/roles/bot.png"
      );
    } else if (role === "Support") {
      setRoleData(
        "https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/roles/support.png"
      );
    }
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : (
        <div className="flex gap-1 items-center">
          <Image src={roleData} alt="" width={20} height={20}></Image>
          <span className="text-xs uppercase font-thin">{role}</span>
        </div>
      )}
    </div>
  );
};

export default CheckPlayerRole;
