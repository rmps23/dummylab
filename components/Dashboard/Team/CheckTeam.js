"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";
import CircularProgress from "@mui/material/CircularProgress";
import TeamBox from "./TeamBox";

const CheckTeam = () => {
  const [teamData, setTeamData] = useState(null);
  const [userID, setUserID] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const { data: sessionData, error: sessionError } =
          await supabase.auth.getSession();
        if (sessionError) {
          throw sessionError;
        }
        setUserID(sessionData.session.user.id);

        const { data: teamData, error: teamError } = await supabase
          .from("teams")
          .select("*");
        if (teamError) {
          throw teamError;
        }

        setTeamData(teamData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error.message);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className="my-4">
      {loading ? (
        <div>
          <CircularProgress
            size={20}
            className="text-teal-500"
            color="inherit"
          />
        </div>
      ) : teamData && teamData.length ? (
        <div className="flex w-full gap-2">
          <TeamBox name={teamData[0].name} />
          <TeamBox name={teamData[0].name} />
          <TeamBox name={teamData[0].name} />
        </div>
      ) : (
        <p>No team data available</p>
      )}
    </div>
  );
};

export default CheckTeam;
