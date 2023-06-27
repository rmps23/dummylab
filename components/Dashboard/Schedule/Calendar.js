import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import CircularLoading from "@components/UI/CircularLoading";

const Calendar = ({ monthNum, yearNum }) => {
  const [monthName, setMonthName] = useState();
  const [daysArray, setDaysArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const monthName = moment()
      .month(monthNum - 1)
      .format("MMMM");
    setMonthName(monthName);

    let totalDaysMonth = moment(
      `${yearNum}-${monthNum}`,
      "YYYY-M"
    ).daysInMonth();

    let totalDaysPrevMonth = moment(
      `${yearNum}-${monthNum - 1}`,
      "YYYY-M"
    ).daysInMonth();

    const specificDate = yearNum + "-" + monthNum + "-" + "1";
    const weekDayNumber = moment(specificDate).format("d");

    const daysArray = Array.from({ length: totalDaysMonth }, (_, index) => {
      const date = moment({
        year: yearNum,
        month: monthNum - 1,
        day: index + 1,
      });
      return {
        day: date.date(),
        month: date.month() + 1,
        year: date.year(),
      };
    });

    for (let i = 0; i < weekDayNumber; i++) {
      daysArray.unshift({
        day: totalDaysPrevMonth,
        month: monthNum - 1,
        year: yearNum,
      });
      totalDaysPrevMonth--;
    }

    setDaysArray(daysArray);
    console.log(daysArray);
    setLoading(false);
  }, [monthNum]);

  return (
    <>
      {loading ? (
        <div className="w-full items-center justify-center flex">
          <CircularLoading />
        </div>
      ) : (
        <>
          <div className="bg-zinc-900 mb-2 rounded-sm p-4">
            <span className="text-xl text-teal-500 uppercase">{monthName}</span>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center mb-2">
            <div className="bg-zinc-900 rounded-sm">Sunday</div>
            <div className="bg-zinc-900 rounded-sm">Monday</div>
            <div className="bg-zinc-900 rounded-sm">Tuesday</div>
            <div className="bg-zinc-900 rounded-sm">Wednesday</div>
            <div className="bg-zinc-900 rounded-sm">Thursday</div>
            <div className="bg-zinc-900 rounded-sm">Friday</div>
            <div className="bg-zinc-900 rounded-sm">Saturday</div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {daysArray && daysArray.length > 0 ? (
              daysArray.map((day, index) => {
                return (
                  <div
                    key={index}
                    className="border border-teal-600/40 rounded-sm h-36"
                  >
                    {day.day}
                  </div>
                );
              })
            ) : (
              <p>invalid</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
