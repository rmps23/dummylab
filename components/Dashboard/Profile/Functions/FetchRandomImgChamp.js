import { supabase } from "@supabase";
import { useQuery } from "react-query";

export const FetchRandomImgChamp = () => {
  const queryKey = ["fetchRandomImgChamp"];
  const {
    data: champImg,
    isLoading: champImgLoading,
    error: champImgError,
  } = useQuery(queryKey, {
    queryFn: async () => {
      const { data, error } = await supabase.from("champion").select("*");
      const randomNumber = Math.floor(Math.random() * data.length);

      const inputString = data[randomNumber].image;
      const result = inputString.split(".")[0];

      return result;
    },
    refetchOnWindowFocus: false,
  });

  return { champImg, champImgLoading, champImgError };
};
