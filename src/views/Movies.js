import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import { movieTypes } from '../helpers/movieTypes';
import styles from './sass/Views.module.scss';

const Movies = ({ location }) => {
  const context = useContext(RootContext);
  const { topRatedMovies, popularMovies } = context;
  const { pathname } = location;

  let type = null;
  let arr = null;

  if (pathname === '/movies/popular' || pathname === '/movies') {
    type = movieTypes.popular;
    arr = popularMovies;
  }
  if (pathname === '/movies/topRated') {
    type = movieTypes.topRated;
    arr = topRatedMovies;
  }

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Movies</h1>
      <MovieList moviesType={type} moviesArray={arr} />
    </div>
  );
};

export default Movies;
