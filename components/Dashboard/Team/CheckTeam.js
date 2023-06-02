"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import CircularProgress from "@mui/material/CircularProgress";
import { RiShieldFlashFill } from "react-icons/ri";

const CheckTeam = () => {
  const [teamData, setTeamData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();
        if (sessionError) {
          throw sessionError;
        }

        const userID = sessionData.session.user.id;

        const { data: teamData, error: teamError } = await supabase
          .from("teams")
          .select("*")
          .eq("user_id", userID);

        if (teamError) {
          throw teamError;
        }

        setTeamData(teamData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <div>
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : teamData && teamData.length > 0 ? (
        teamData.map((item) => {
          return (
            <a
              href={`/dashboard/team/${item.name}/${item.id}`}
              key={item.id}
              className="group relative overflow-hidden"
            >
              <RiShieldFlashFill className="text-zinc-950 absolute text-9xl group-hover:text-teal-500/40 left-2/4 group-hover:scale-105  transition duration-200 " />
              <div className="backdrop-filter backdrop-blur-sm backdrop-opacity-50 bg-opacity-60 shadow-md shadow-zinc-950 bg-zinc-950 rounded-md min-h-[120px] flex items-center px-10">
                <p className="uppercase text-teal-500 max-w-xs">{item.name}</p>
              </div>
            </a>
          );
        })
      ) : (
        <p>No team data available</p>
      )}
    </div>
  );
};

export default CheckTeam;
