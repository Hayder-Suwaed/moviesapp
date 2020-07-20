import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

import { StyledMovieThump } from "../styles/StyledMovieThumb";

const MovieThump = ({ image, movieId, clickable }) => (
  <StyledMovieThump>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="moviethump" />
      </Link>
    ) : (
      <img src={image} alt="moviethump" />
    )}
  </StyledMovieThump>
);

MovieThump.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default MovieThump;
