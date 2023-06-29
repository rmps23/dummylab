import React from "react";
import moment from "moment";
import Calendar from "./Calendar";
import { useState } from "react";
import { useParams } from "next/navigation";

const Schedule = () => {
  const [monthNum, setMonthNum] = useState(moment().month() + 1);
  const [yearNum, setYearNum] = useState(moment().year());

  const params = useParams();
  const teamID = params.teamId;
  const teamName = params.teamName;

  const nextMonth = () => {
    if (monthNum >= 12) {
      setMonthNum(0);
      setYearNum((nextYearNum) => nextYearNum + 1);
    }
    setMonthNum((nextMonthNum) => nextMonthNum + 1);
  };

  const prevMonth = () => {
    if (monthNum == 1) {
      setMonthNum(13);
      setYearNum((nextYearNum) => nextYearNum - 1);
    }
    setMonthNum((prevMonthNum) => prevMonthNum - 1);
  };

  return (
    <div>
      <Calendar
        monthNum={monthNum}
        yearNum={yearNum}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        teamID={teamID}
        teamName={teamName}
      />
    </div>
  );
};

export default Schedule;
