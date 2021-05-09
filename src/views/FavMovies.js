import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import { movieTypes } from '../helpers/movieTypes';
import styles from './sass/Views.module.scss';

const FavMovies = () => {
  const context = useContext(RootContext);
  const { favMovies } = context;

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>FavMovies</h1>
      {favMovies.length === 0 ? (
        <h2 className={styles.info}>Favorite list is empty</h2>
      ) : (
        <MovieList
          moviesType={movieTypes.favorites}
          moviesArray={context.favMovies}
        />
      )}
    </div>
  );
};

export default FavMovies;
