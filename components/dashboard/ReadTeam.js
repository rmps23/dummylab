"use client";

import * as React from "react";
import { supabase } from "../../supabase";
import { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ReadTeam = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Code to be executed after the delay
      console.log("Delayed execution after 2 seconds");
      fetchData();
    }, 2000);
  }, []);

  const fetchData = async () => {
    try {
      const teamId = "teste"; // Replace with your desired team ID
      let query = supabase.from("teams").select("*");

      if (teamId) {
        query = query.eq("name", teamId);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>
          <LinearProgress color="inherit" className="w-20 my-10" />
        </p>
      ) : data ? (
        <p>{data[0].id}</p> // Access the 'name' property of the first object in the 'data' array
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ReadTeam;
