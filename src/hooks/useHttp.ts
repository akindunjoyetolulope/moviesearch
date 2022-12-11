import { useState } from "react";
import { Search } from "../models/films";

const APIKEY = "1ce1ecfe";
const useHttp = () => {
  const [result, setResult] = useState<Search[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //   const [hasError, setHasError] = useState(false);

  const api = async (filterTitle: string = "bat") => {
    setIsLoading(true);
    const data = await fetch(
      `https://www.omdbapi.com/?apikey=${APIKEY}&s=${filterTitle}`,
      {
        method: "GET",
      }
    );
    const jsonData = await data.json();
    setResult(jsonData.Search);
    setIsLoading(false);
  };

  return {
    result,
    isLoading,
    api,
  };
};

export default useHttp;
