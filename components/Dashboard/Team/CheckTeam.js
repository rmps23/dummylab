"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import CircularProgress from "@mui/material/CircularProgress";
import TeamBox from "./TeamBox";

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
            <div className="bg-zinc-950 w-full p-6">
              <p>{item.name}</p>
            </div>
          );
        })
      ) : (
        <p>No team data available</p>
      )}
    </div>
  );
};

export default CheckTeam;
