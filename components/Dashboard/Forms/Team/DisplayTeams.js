import { FetchUserTeams } from "@components/Functions/FetchUserTeams";
import { useState, useEffect } from "react";

const DisplayTeams = () => {
  const [userTeams, setUserTeams] = useState([]);

  useEffect(() => {
    FetchUserTeams()
      .then((value) => {
        setUserTeams(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(userTeams);
  return (
    <div>
      {userTeams.map((team) => (
        <p key={team.id}>{team.id}</p>
      ))}
    </div>
  );
};

export default DisplayTeams;
