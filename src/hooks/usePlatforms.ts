import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
