// import Button from "@components/UI/Button";
// import CircularLoading from "@components/UI/CircularLoading";

import { useState, useEffect } from "react";
import { FetchPlayerEvent } from "./Functions/FetchPlayerEvent";

const OpenEvent = ({ event }) => {
  //   const [complete, setComplete] = useState(false);
  //   const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    FetchPlayerEvent(event.id)
      .then((value) => {
        setPlayers(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {/* {loading ? (
        <div className="w-full text-center">
          <CircularLoading />
        </div>
      ) : (
        <>teste</>
      )} */}
    </>
  );
};

export default OpenEvent;
