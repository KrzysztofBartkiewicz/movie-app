import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import styles from './MovieList.module.scss';

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => {
        return <MovieListItem {...movie} />;
      })}
    </ul>
  );
};

export default MovieList;
