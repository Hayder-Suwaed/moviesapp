import React from "react";
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import LoadMoreBtn from "./elements/LoadMoreBth.js";
import Spinner from "./elements/Spinner";
import MovieThump from "./elements/MovieThumb";

const Home = () => (
  <>
    <HeroImage />
    <Grid />
    <SearchBar />
    <MovieThump />
    <Spinner />
    <LoadMoreBtn />
  </>
);


export default Home;