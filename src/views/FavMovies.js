import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import styles from './sass/Views.module.scss';

const FavMovies = () => {
  const context = useContext(RootContext);

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>FavMovies</h1>
      <MovieList moviesArray={context.favMovies} />
    </div>
  );
};

export default FavMovies;
