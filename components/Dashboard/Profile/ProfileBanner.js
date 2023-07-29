import React from "react";
import { FetchRandomImgChamp } from "./Functions/FetchRandomImgChamp";
import CircularLoading from "@components/UI/CircularLoading";
import { useParams } from "next/navigation";
import useChampImgStore from "@components/Store/champImgStore";
import { useEffect } from "react";

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
      <div className="h-80 w-full bg-zinc-950 overflow-hidden relative shadow-md shadow-zinc-950/30 flex items-center justify-center">
        <CircularLoading color={"text-zinc-500"} />
      </div>
    );
  }

  if (champImgError) return <h1>{JSON.stringify(playersErrorLength)}</h1>;

  return (
    <div className="h-80 w-full bg-zinc-950 overflow-hidden relative shadow-md shadow-zinc-950/30 group flex items-center px-24 rounded-md">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
          storeIMG ? storeIMG : champImg
        }_0.jpg`}
        alt=""
        className="w-full absolute left-0 -top-20 opacity-20 blur-md grayscale-0 transition-all duration-300 saturate-150 group-hover:saturate-200 group-hover:blur-xl"
      />

      <div className="flex gap-12 items-center">
        <img
          src={`https://fpwrnfdqzvztmakmrdnc.supabase.co/storage/v1/object/public/team_logos/${teamID}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/dummylab-logo-w.png";
          }}
          width={200}
          alt=""
          className="backdrop-blur-sm opacity-80 bg-zinc-900/40 p-5 rounded-md shadow-md shadow-zinc-950/40 group-hover:shadow-teal-600/40 transition-all duration-300"
        />
        <p className="text-5xl uppercase text-zinc-200 font-medium">
          {teamName}
        </p>
      </div>
    </div>
  );
};

export default ProfileBanner;
