import React from 'react';
import MovieList from '../components/MovieList/MovieList';
import styles from './sass/Views.module.scss';

const Movies = ({ movies }) => {
  return (
    <div className={styles.view}>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
