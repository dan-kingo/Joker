import { useInfiniteQuery } from "@tanstack/react-query";
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
  page: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient
        .get("/games", {
          params: {
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, // 24hr
  });

export default useGames;
