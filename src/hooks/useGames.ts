import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosError, CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

export interface Response {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Response>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, setGames, error, setError };
};

export default useGames;
