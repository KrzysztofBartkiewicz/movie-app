import React, { Fragment } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import MoviePagination from '../MoviePagination/MoviePagination';
import styles from './MovieList.module.scss';

const MovieList = ({ moviesArray, moviesType }) => {
  return (
    <>
      <MoviePagination moviesType={moviesType} />
      <ul className={styles.list}>
        {moviesArray.map((movie) => (
          <Fragment key={movie.id}>
            <MovieListItem {...movie} movie={movie} />
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
