import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/apiClient";
import { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hr
  });

export default useGames;
