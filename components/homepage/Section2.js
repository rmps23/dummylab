import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { RiCalendarTodoFill } from "react-icons/ri";
import { RiFundsBoxFill } from "react-icons/ri";

const Section2 = () => {
  return (
    <div className="z-10">
      <ul className="flex flex-col gap-14 px-20 lg:flex-row lg:gap-20">
        <li className="relative">
          <div className="card first-card h-60 absolute bg-teal-500 w-full -z-20 -top-4 lg:h-72 lg:-top-6"></div>
          <div className="bg-stone-950 p-4 max-w-xs h-52 bg-opacity-90 backdrop-filter backdrop-blur-sm lg:h-60 lg:p-10">
            <RiTeamFill className="absolute -right-6 -top-6 text-7xl opacity-80" />
            <h1 className="text-teal-500 text-lg mb-4">Team Management</h1>
            <p className="tracking-wider text-xs">
              Easily create and manage your team. Assign players to specific
              roles, track their progress, and ensure optimal synergy among your
              players.
            </p>
          </div>
        </li>

        <li className="relative">
          <div className="card first-card h-60 absolute bg-teal-500 w-full -z-20 -top-4 lg:h-72 lg:-top-6"></div>
          <div className="bg-stone-950 p-4 max-w-xs h-52 bg-opacity-90 backdrop-filter backdrop-blur-sm lg:h-60 lg:p-10">
            <RiCalendarTodoFill className="absolute -right-6 -top-6 text-7xl opacity-80" />
            <h1 className="text-teal-500 text-lg mb-4">Practice Scheduler</h1>
            <p className="tracking-wider text-xs">
              Plan and schedule practice sessions with ease. Our flexible
              calendar allows you to set up recurring sessions, designate
              specific strategies to focus on.
            </p>
          </div>
        </li>

        <li className="relative">
          <div className="card first-card h-60 absolute bg-teal-500 w-full -z-20 -top-4 lg:h-72 lg:-top-6"></div>
          <div className="bg-stone-950 p-4 max-w-xs h-52 bg-opacity-90 backdrop-filter backdrop-blur-sm lg:h-60 lg:p-10">
            <RiFundsBoxFill className="absolute -right-6 -top-6 text-7xl opacity-80" />
            <h1 className="text-teal-500 text-lg mb-4">Match Analytics</h1>
            <p className="tracking-wider text-xs">
              Dive deep into match analysis and review your team's performance.
              Access comprehensive statistics and replay analysis to identify
              strengths, weaknesses, and areas for improvement.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Section2;
