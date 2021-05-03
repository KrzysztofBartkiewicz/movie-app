import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import { movieTypes } from '../helpers/movieTypes';
import styles from './sass/Views.module.scss';

const Movies = ({ location }) => {
  const context = useContext(RootContext);
  const { topRatedMovies, popularMovies } = context;
  const { pathname } = location;

  const setMoviesType = () => {
    if (pathname === '/movies/popular') {
      return { arr: popularMovies, type: movieTypes.popular };
    }
    if (pathname === '/movies/topRated') {
      return { arr: topRatedMovies, type: movieTypes.topRated };
    }
  };

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Movies</h1>
      <MovieList
        moviesType={setMoviesType().type}
        moviesArray={setMoviesType().arr}
      />
    </div>
  );
};

export default Movies;
