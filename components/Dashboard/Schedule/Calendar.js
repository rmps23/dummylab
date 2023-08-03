import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import CircularLoading from "@components/UI/CircularLoading";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import Modal from "@components/UI/Modal";
import AddEvent from "../Forms/Schedule/AddEvent";
import { FetchEvents } from "./Functions/FetchEvents";
import OpenEvent from "./OpenEvent";

const Calendar = ({
  monthNum,
  yearNum,
  prevMonth,
  nextMonth,
  teamID,
  teamName,
  closeModal,
  setCloseModal,
}) => {
  const [monthName, setMonthName] = useState();
  const [daysArray, setDaysArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const today = moment().format("YYYY-M-D");

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
      `${yearNum}-${monthNum == 1 ? 12 : monthNum - 1}`,
      "YYYY-M"
    ).daysInMonth();

    const firstDay = yearNum + "-" + monthNum + "-" + "1";
    const firstDayWeekNum = moment(firstDay).format("d");

    const daysArray = [];

    for (let index = 1; index <= totalDaysMonth; index++) {
      const weekDayMaker = moment(
        yearNum + "-" + monthNum + "-" + index,
        "YYYY-MM-DD"
      );
      daysArray.push({
        year: yearNum,
        month: monthNum,
        day: index,
        fill: yearNum + "-" + monthNum + "-" + index,
        weekDay: weekDayMaker.format("dddd"),
        selected: true,
      });
    }

    for (let i = 0; i < firstDayWeekNum; i++) {
      const weekDayMaker = moment(
        (monthNum === 1 ? yearNum - 1 : yearNum) +
          "-" +
          (monthNum === 1 ? 12 : monthNum - 1) +
          "-" +
          totalDaysPrevMonth,
        "YYYY-MM-DD"
      );
      daysArray.unshift({
        year: monthNum === 1 ? yearNum - 1 : yearNum,
        month: monthNum === 1 ? 12 : monthNum - 1,
        day: totalDaysPrevMonth,
        fill:
          (monthNum === 1 ? yearNum - 1 : yearNum) +
          "-" +
          (monthNum === 1 ? 12 : monthNum - 1) +
          "-" +
          totalDaysPrevMonth,
        weekDay: weekDayMaker.format("dddd"),
        selected: false,
      });
      totalDaysPrevMonth--;
    }

    const lastDayMonth = yearNum + "-" + monthNum + "-" + totalDaysMonth;
    const lastDayWeekNum = moment(lastDayMonth).format("d");
    let calcNextDays = 6 - lastDayWeekNum;

    let incrementedYear = false;

    for (let i = 1; i <= calcNextDays; i++) {
      const weekDayMaker = moment(
        (monthNum === 12 ? yearNum + 1 : yearNum) +
          "-" +
          (monthNum === 12 ? 1 : monthNum + 1) +
          "-" +
          i,
        "YYYY-MM-DD"
      );
      daysArray.push({
        year: monthNum === 12 ? yearNum + 1 : yearNum,
        month: monthNum === 12 ? 1 : monthNum + 1,
        day: i,
        fill:
          (monthNum === 12 ? yearNum + 1 : yearNum) +
          "-" +
          (monthNum === 12 ? 1 : monthNum + 1) +
          "-" +
          i,
        selected: false,
        weekDay: weekDayMaker.format("dddd"),
      });
    }

    setDaysArray(daysArray);
    setLoading(false);
  }, [monthNum]);

  useEffect(() => {
    FetchEvents()
      .then((value) => {
        setEvents(value);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full items-center justify-center flex">
          <CircularLoading />
        </div>
      ) : (
        <div className="mb-20">
          <div className="flex justify-between items-center mb-1 bg-zinc-950 p-4 rounded-sm text-teal-">
            <div className="flex items-center justify-center">
              <div className="flex gap-2 uppercase font-light">
                <span>{yearNum}</span>
                <span>{monthName}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span
                onClick={prevMonth}
                className="bg-teal-700 text-white p-2 w-14 flex items-center justify-center rounded-md cursor-pointer"
              >
                <BsChevronLeft />
              </span>
              <span
                onClick={nextMonth}
                className="bg-teal-700 text-white p-2 w-14 flex items-center justify-center rounded-md cursor-pointer"
              >
                <BsChevronRight />
              </span>
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-7 gap-1 text-center text-[10px] uppercase text-zinc-400 font-light">
            <div className="bg-zinc-950 rounded-sm py-1">Sun</div>
            <div className="bg-zinc-950 rounded-sm py-1">Mon</div>
            <div className="bg-zinc-950 rounded-sm py-1">Tue</div>
            <div className="bg-zinc-950 rounded-sm py-1">Wed</div>
            <div className="bg-zinc-950 rounded-sm py-1">Thu</div>
            <div className="bg-zinc-950 rounded-sm py-1">Fri</div>
            <div className="bg-zinc-950 rounded-sm py-1">Sat</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-1 mt-1">
            {daysArray &&
              daysArray.length > 0 &&
              daysArray.map((day, index) => {
                if (day.selected === false) {
                  return (
                    <div
                      key={index}
                      className="rounded-md h-40 bg-zinc-950/50 border border-zinc-900 transition ease-in-out duration-200 relative p-1 overflow-auto scroll-edit"
                    >
                      <p className="absolute text-xs text-zinc-600 top-2 left-2">
                        {day.day}
                      </p>
                      <span className="lg:hidden text-[10px] absolute text-zinc-600 right-2 top-2">
                        {day.weekDay}
                      </span>
                      <div className="mt-6">
                        {events.map((event) => {
                          return (
                            <div key={event.id}>
                              {event.date == day.fill && (
                                <p className="bg-teal-700 rounded-md text-zinc-300 py-1 px-2 mb-2 text-xs text-center opacity-40">
                                  {event.name}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className={`rounded-md h-40 border-zinc-900 transition ease-in-out duration-200 relative p-1 overflow-auto scroll-edit ${
                        today == day.fill ? "bg-teal-600" : "bg-zinc-950"
                      }`}
                    >
                      <p
                        className={`absolute text-xs top-2 left-2 right-2 justify-between flex ${
                          today == day.fill
                            ? "text-white uppercase"
                            : "text-teal-600"
                        }`}
                      >
                        {day.day}
                        <span className="text-[10px]">
                          {today == day.fill && " Today"}
                        </span>
                        <span className="lg:hidden text-[10px]">
                          {day.weekDay}
                        </span>
                      </p>
                      <Modal
                        btn="+"
                        icon={""}
                        classes={`top-7 left-1 right-1 absolute rounded-md bg-zinc-900 text-md cursor-pointer font-light text-center hover:bg-teal-600 transition ease-in-out duration-300 flex items-center justify-center ${
                          today == day.fill
                            ? "bg-zinc-900 hover:bg-zinc-950"
                            : "bg-zinc-900"
                        }`}
                        form={
                          <AddEvent
                            teamID={teamID}
                            day={day.fill}
                            teamId={teamID}
                            teamName={teamName}
                            closeModal={closeModal}
                            setCloseModal={setCloseModal}
                          />
                        }
                        title={`Add new event`}
                        closeModal={closeModal}
                        setCloseModal={setCloseModal}
                      />
                      <div className="mt-14">
                        {events.map((event) => {
                          return (
                            <div key={event.id}>
                              {event.date == day.fill && (
                                <>
                                  <Modal
                                    btn={event.name + " / " + event.time}
                                    icon={""}
                                    classes={`bg-teal-700 rounded-md text-zinc-300 py-2 px-2 cursor-pointer mb-2 text-sm text-center w-full flex hover:bg-teal-600 transition ease-in-out duration-200`}
                                    form={
                                      <OpenEvent
                                        event={event}
                                        teamId={teamID}
                                        teamName={teamName}
                                        closeModal={closeModal}
                                        setCloseModal={setCloseModal}
                                      />
                                    }
                                    title={event.name}
                                    closeModal={closeModal}
                                    setCloseModal={setCloseModal}
                                  />
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Calendar;
