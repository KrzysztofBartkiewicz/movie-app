import React, { useContext } from 'react';
import RootContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { movieTypes } from '../../helpers/movieTypes';
import styles from './MoviePagination.module.scss';

const MoviePagination = ({ moviesType }) => {
  const context = useContext(RootContext);
  const {
    topRatedMoviesPageNumber,
    popularMoviesPageNumber,
    searchedMoviesPageNumber,
    topRatedTotalPages,
    popularTotalPages,
    searchedTotalPages,
    goToNextPage,
    goToPrevPage,
    goToPage,
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
  if (moviesType === movieTypes.searched) {
    pageNumber = searchedMoviesPageNumber;
    totalPages = searchedTotalPages;
  }

  const pages = new Array(totalPages).fill(null).map((page, i) => {
    page = i + 1;

    return (
      <button
        onClick={() => goToPage(moviesType, page)}
        key={i}
        className={`${styles.pageNumber} ${
          page === pageNumber && styles.activePageNumber
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
        <FontAwesomeIcon icon={faBackward} />
      </button>

      {pageNumber > 3 && (
        <>
          <button
            onClick={() => goToPage(moviesType, 1)}
            className={`${styles.pageNumber} ${styles.pageNumberTotal}`}
          >
            {1}
          </button>
          <span className={styles.dots}>...</span>
        </>
      )}
      {pages.filter((undefined, i) => i > pageNumber - 4 && i < pageNumber + 2)}
      {pageNumber < totalPages - 2 && (
        <>
          <span className={styles.dots}>...</span>
          <button
            onClick={() => goToPage(moviesType, totalPages)}
            className={`${styles.pageNumber} ${styles.pageNumberTotal}`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className={styles.goNextBtn}
        onClick={() => goToNextPage(moviesType)}
        disabled={pageNumber === totalPages && true}
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default MoviePagination;
