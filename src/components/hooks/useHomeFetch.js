import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);

    try {
      //wait two times one for fetching data and second for parsing data to JSON
      const result = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        movies: [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentpage: result.page,
        totalpages: result.total_pages
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  return [{ state, loading, error }, fetchMovies];
};
