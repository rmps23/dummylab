import React from "react";
import moment from "moment";
import Calendar from "./Calendar";
import { useState } from "react";

const Schedule = () => {
  const [monthNum, setMonthNum] = useState(moment().month() + 1);
  let yearNum = moment().year();

  const nextMonth = () => {
    setMonthNum((nextMonthNum) => nextMonthNum + 1);
  };

  const prevMonth = () => {
    setMonthNum((prevMonthNum) => prevMonthNum - 1);
  };

  console.log(monthNum);

  return (
    <div className="bg-zinc-950 opacity-80 bg-opacity-90 backdrop-filter backdrop-blur-lg p-4 rounded-md">
      <div className="flex flex-row-reverse gap-2">
        <button onClick={nextMonth}>next month</button>
        <button onClick={prevMonth}>prev month</button>
      </div>
      <Calendar monthNum={monthNum} yearNum={yearNum} />
    </div>
  );
};

export default Schedule;
