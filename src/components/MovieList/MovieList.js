import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return <MovieListItem {...movie} />;
      })}
    </ul>
  );
};

export default MovieList;
