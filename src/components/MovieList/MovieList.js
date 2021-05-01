import React, { Fragment } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import styles from './MovieList.module.scss';

const MovieList = ({ moviesArray }) => {
  return (
    <ul className={styles.list}>
      {moviesArray.map((movie) => (
        <Fragment key={movie.id}>
          <MovieListItem {...movie} />
        </Fragment>
      ))}
    </ul>
  );
};

export default MovieList;
