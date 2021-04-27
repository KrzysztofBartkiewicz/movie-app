import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import styles from './MovieList.module.scss';

const MovieList = ({ moviesArray }) => {
  return (
    <ul className={styles.list}>
      {moviesArray.map((movie) => (
        <MovieListItem {...movie} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
