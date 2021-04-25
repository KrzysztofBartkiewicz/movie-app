import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import styles from './MovieList.module.scss';

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.movie}>
          <MovieListItem {...movie} movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
