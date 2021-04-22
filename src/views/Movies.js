import React from 'react';
import MovieList from '../components/MovieList/MovieList';
import styles from './Views.module.scss';

const Movies = ({ movies }) => {
  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
