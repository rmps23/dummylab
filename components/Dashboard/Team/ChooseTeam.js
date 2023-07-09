import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { FetchUserTeams } from "./Function/FetchUserTeams";
import { FetchTeamData } from "./Function/FetchTeamData";

import CircularLoading from "@components/UI/CircularLoading";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const ChooseTeam = () => {
  const { userTeams, isLoading, error } = FetchUserTeams();

  console.log(userTeams);
  // const params = useParams();

  // const { teamData, teamDataLoading, teamDataError } = FetchTeamData(
  //   params.teamId
  // );

  // const filteredArray = teamData.filter((item) => item.id !== params.teamId);

  // if (error) return <h1>{JSON.stringify(error)}</h1>;

  // if (isLoading)
  //   return (
  //     <div className="flex pt-4 pb-3 items-center justify-center bg-zinc-950 rounded-md">
  //       <CircularLoading />
  //     </div>
  //   );

  // const [teams, setTeams] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [dropdown, setDropDown] = useState(false);

  // let decodedUrl = decodeURIComponent(params.teamName);
  // let teamName = decodedUrl.replace(/\+/g, " ");

  // const toggleDrop = () => {
  //   setDropDown(!dropdown);
  // };

  return (
    <></>
    // <>
    //   {teams.length < 1 ? (
    //     <div className="bg-zinc-950 p-3 h-12 w-full flex items-center rounded-md relative overflow-hidden group float-right">
    //       <span className="uppercase text-sm text-zinc-400 group-hover:text-zinc-300 transition-all duration-200">
    //         {teamName}
    //       </span>
    //       <img
    //         src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${params.teamId}`}
    //         onError={(e) => {
    //           e.target.onerror = null;
    //           e.target.src = "/assets/dummylab-logo-w.png";
    //         }}
    //         width={50}
    //         alt=""
    //         className="absolute right-0 top-0 scale-125 opacity-30 group-hover:opacity-60 transition-all duration-200"
    //       />
    //     </div>
    //   ) : (
    //     <div className="relative flex flex-row-reverse w-full sm:w-72 float-right">
    //       <div
    //         className={`bg-zinc-950 p-3 h-12 w-12 text-xl flex items-center justify-center z-20 transition-all cursor-pointer float-right hover:bg-zinc-950/50 ${
    //           dropdown === true ? "rounded-tr-md" : "rounded-r-md"
    //         }`}
    //         onClick={toggleDrop}
    //       >
    //         {dropdown === true ? (
    //           <FaAngleDown className="transition-all duration-200" />
    //         ) : (
    //           <FaAngleDown className="-rotate-180 transition-all duration-200" />
    //         )}
    //       </div>
    //       <div
    //         className={`bg-zinc-950 p-3 h-12 w-full flex items-center relative overflow-hidden group ${
    //           dropdown === true ? "rounded-tl-md" : " rounded-l-md"
    //         }`}
    //       >
    //         <span className="uppercase text-sm text-zinc-400 group-hover:text-zinc-300 transition-all duration-200">
    //           {teamName}
    //         </span>
    //         <img
    //           src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${params.teamId}`}
    //           onError={(e) => {
    //             e.target.onerror = null;
    //             e.target.src = "/assets/dummylab-logo-w.png";
    //           }}
    //           width={50}
    //           alt=""
    //           className="absolute right-0 top-0 scale-125 opacity-30 group-hover:opacity-60 transition-all duration-200"
    //         />
    //       </div>
    //       <div
    //         className={`absolute left-0 right-0 top-12 z-10 transition-all duration-200 overflow-auto scroll-edit rounded-b-md ${
    //           dropdown === true ? "h-40" : "h-0 border-none"
    //         }`}
    //       >
    //         {teams && teams.length > 0 ? (
    //           <>
    //             {teams.map((team) => {
    //               return (
    //                 <Link
    //                   className="w-full py-2 flex items-center px-3 h-12 overflow-hidden relative group cursor-pointer bg-zinc-950 hover:bg-teal-800"
    //                   key={team.id}
    //                   href={`/dashboard/team/players/${team.name.replace(
    //                     /\s/g,
    //                     "+"
    //                   )}/${team.id}`}
    //                 >
    //                   <img
    //                     src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${team.id}`}
    //                     onError={(e) => {
    //                       e.target.onerror = null;
    //                       e.target.src = "/assets/dummylab-logo-w.png";
    //                     }}
    //                     width={50}
    //                     className="scale-110 absolute right-0 -top-1 transition-all duration-300 opacity-25 group-hover:opacity-100 group-hover:scale-125"
    //                   />
    //                   <span className="uppercase text-sm text-zinc-400 group-hover:text-zinc-300 transition-all duration-200">
    //                     {team.name}
    //                   </span>
    //                 </Link>
    //               );
    //             })}
    //           </>
    //         ) : (
    //           <></>
    //         )}
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default ChooseTeam;
