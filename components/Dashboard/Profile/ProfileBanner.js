import React from "react";
import { FetchRandomImgChamp } from "./Functions/FetchRandomImgChamp";
import CircularLoading from "@components/UI/CircularLoading";
import { useParams } from "next/navigation";
import useChampImgStore from "@components/Store/champImgStore";
import { useEffect } from "react";
import ChooseTeam from "@components/Dashboard/Team/ChooseTeam";

const ProfileBanner = () => {
  const params = useParams();

  const { champImg, champImgLoading, champImgError } = FetchRandomImgChamp();

  const setData = useChampImgStore((state) => state.setData);
  const storeIMG = useChampImgStore((state) => state.data);

  useEffect(() => {
    if (storeIMG === undefined || storeIMG.length === 0) {
      setData(champImg);
    }
  }, []);

  let teamID = params.teamId;
  let decodedUrl = decodeURIComponent(params.teamName);
  let teamName = decodedUrl.replace(/\+/g, " ");

  if (champImgLoading) {
    return (
      <div className="h-60 w-full bg-zinc-950 overflow-hidden relative shadow-md shadow-zinc-950/30 flex items-center justify-center">
        <CircularLoading color={"text-zinc-500"} />
      </div>
    );
  }

  if (champImgError) return <h1>{JSON.stringify(playersErrorLength)}</h1>;

  return (
    <>
      <div className="flex flex-row-reverse mb-4">
        <ChooseTeam />
      </div>
      <div className="h-48 md:h-60 w-full overflow-hidden relative border border-zinc-800 group flex items-center px-6 md:px-16 rounded-t-md justify-between">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
            storeIMG ? storeIMG : champImg
          }_0.jpg`}
          alt=""
          className="w-full absolute -z-10 left-0 -top-0 opacity-70 blur-md grayscale-0 transition-all duration-300 saturate-150 group-hover:saturate-200 group-hover:blur-xl md:-top-36"
        />

        <div className="flex gap-12 items-center backdrop-blur-[1px] bg-zinc-950/50 px-4 py-2 rounded-md">
          <p className="text-2xl uppercase text-zinc-300 font-medium ">
            {teamName}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileBanner;
