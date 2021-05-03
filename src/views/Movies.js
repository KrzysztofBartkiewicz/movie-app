import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import styles from './sass/Views.module.scss';

const Movies = ({ location }) => {
  const context = useContext(RootContext);
  const { topRatedMovies, popularMovies } = context;
  const { pathname } = location;

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Movies</h1>
      <MovieList
        moviesArray={
          pathname === '/movies/popular' ? popularMovies : topRatedMovies
        }
      />
    </div>
  );
};

export default Movies;
