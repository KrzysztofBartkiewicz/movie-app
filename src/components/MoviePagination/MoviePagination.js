import React, { useContext } from 'react';
import RootContext from '../../context';
import { movieTypes } from '../../helpers/movieTypes';
import styles from './MoviePagination.module.scss';

const MoviePagination = ({ moviesType }) => {
  const context = useContext(RootContext);
  const {
    topRatedMoviesPageNumber,
    popularMoviesPageNumber,
    topRatedTotalPages,
    popularTotalPages,
    goToNextPage,
    goToPrevPage,
  } = context;

  let pageNumber = null;
  let totalPages = null;

  if (moviesType === movieTypes.popular) {
    pageNumber = popularMoviesPageNumber;
    totalPages = popularTotalPages;
  }
  if (moviesType === movieTypes.topRated) {
    pageNumber = topRatedMoviesPageNumber;
    totalPages = topRatedTotalPages;
  }

  const pages = new Array(totalPages).fill(null).map((page, i) => {
    page = i + 1;
    return (
      <button
        // TODO: Make oncklick fun
        key={i}
        className={`${styles.pageNumber} ${
          page === pageNumber ? styles.activePageNumber : null
        }`}
      >
        {page}
      </button>
    );
  });

  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.goBackBtn}
        onClick={() => goToPrevPage(moviesType)}
        disabled={pageNumber === 1 && true}
      >
        {'< go back'}
      </button>
      {pageNumber !== 1 && <span className={styles.dots}>...</span>}
      {pages.filter((undefined, i) => i > pageNumber - 4 && i < pageNumber + 2)}
      {pageNumber !== totalPages && <span className={styles.dots}>...</span>}
      <button
        className={styles.goNextBtn}
        onClick={() => goToNextPage(moviesType)}
        disabled={pageNumber === totalPages && true}
      >
        {'go next >'}
      </button>
    </div>
  );
};

export default MoviePagination;
