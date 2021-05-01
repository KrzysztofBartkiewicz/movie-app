import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import styles from './sass/Views.module.scss';

const Movies = () => {
  const context = useContext(RootContext);
  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Movies</h1>
      <MovieList moviesArray={context.topRatedMovies} />
    </div>
  );
};

export default Movies;
