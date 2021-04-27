import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import styles from './sass/Views.module.scss';

const Movies = () => {
  const context = useContext(RootContext);

  return (
    <div className={styles.view}>
      <MovieList moviesArray={context.homeMovies} />
    </div>
  );
};

export default Movies;
