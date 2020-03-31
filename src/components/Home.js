import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import LoadMoreBtn from "./elements/LoadMoreBth.js";
import Spinner from "./elements/Spinner";
import MovieThump from "./elements/MovieThumb";

//custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";
const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state);

  if (error) return <div>Something went wrong ....</div>
  if (!state.movies[0]) return <Spinner />
  return (
    <>
      <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`} 
      title={state.heroImage.original_title}
      text={state.heroImage.overview}
      />
      <Grid />
      <SearchBar />
      <MovieThump />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};

export default Home;
