import React, { useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import LoadMoreBtn from "./elements/LoadMoreBth.js";
import Spinner from "./elements/Spinner";
import MovieThump from "./elements/MovieThumb";
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from "../config";

//custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";
import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    //end point to load more movies
    const searchEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${
      currentPage + 1
    }`;

    const endpoint = searchTerm ? searchEndPoint : popularEndPoint;

    fetchMovies(endpoint);
  };
  if (error) return <div>Something went wrong ....</div>;
  if (!movies[0]) return <Spinner />;
  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map((movie) => (
          <MovieThump
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      <SearchBar callback={searchMovies} />
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
