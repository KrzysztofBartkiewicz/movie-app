import React, { useContext } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import styles from './sass/Views.module.scss';

const Movies = () => {
  const context = useContext(RootContext);
  const shortList = context.popularMovies.slice(0, 5);

  return (
    <div className={styles.view}>
      <MovieList moviesArray={shortList} />
    </div>
  );
};

export default Movies;
