import React, { useContext } from 'react';
import RootContext from '../../context';
import { movieTypes } from '../../helpers/movieTypes';
import styles from './MoviePagination.module.scss';

const MoviePagination = ({ moviesType }) => {
  const context = useContext(RootContext);
  const {
    topRatedMoviesPageNumber,
    popularMoviesPageNumber,
    goToNextPage,
    goToPrevPage,
  } = context;

  const setMovieTypes = () => {
    if (moviesType === movieTypes.popular) {
      return popularMoviesPageNumber;
    }
    if (moviesType === movieTypes.topRated) {
      return topRatedMoviesPageNumber;
    }
  };

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.goBackBtn}
        onClick={() => goToPrevPage(moviesType)}
        disabled={setMovieTypes() === 1 && true}
      >
        {'< go back'}
      </button>
      <h3 className={styles.pageNumber}>{setMovieTypes()}</h3>
      <button
        className={styles.goNextBtn}
        onClick={() => goToNextPage(moviesType)}
      >
        {'go next >'}
      </button>
    </div>
  );
};

export default MoviePagination;
