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
            <a href={`/dashboard/team/${item.name}/${item.id}`} key={item.id}>
              <div className="bg-zinc-950 w-full p-6 flex items-center border border-zinc-950 hover:shadow-lg hover:shadow-teal-600/20 hover:border hover:border-teal-600/40 transition ease-in-out duration-500">
                <RiShieldFlashFill className="mr-4 bg-zinc-600 border border-teal-600 rounded-full p-2 h-10 w-10" />
                <p>{item.name}</p>
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
