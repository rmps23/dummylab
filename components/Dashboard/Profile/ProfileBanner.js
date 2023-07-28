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
    <div className="h-80 w-full bg-zinc-950 overflow-hidden relative shadow-md shadow-zinc-950/30 group">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
          storeIMG ? storeIMG : champImg
        }_0.jpg`}
        alt=""
        className="w-full absolute -top-20 opacity-20 group-hover:blur-md blur-sm grayscale-0 transition-all duration-200 saturate-150"
      />

      <div>
        <p>{teamName}</p>
      </div>
    </div>
  );
};

export default ProfileBanner;
