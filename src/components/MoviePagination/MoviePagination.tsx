import { FC, ReactNode, useContext } from 'react';
import RootContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { movieTypes } from '../../helpers/movieTypes';
import {
  StyledBackButton,
  StyledDots,
  StyledNextButton,
  StyledPagenumberButton,
  StyledPaginationWrapper,
} from './StyledMoviePagination';

type PaginationProps = {
  moviesType: string;
};

const MoviePagination: FC<PaginationProps> = ({ moviesType }) => {
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
  } = useContext(RootContext);

  let pageNumber: number = 0;
  let totalPages: number = 0;

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

  const pagesButtons = new Array(totalPages).fill(null).map((page, i) => {
    page = i + 1;

    return (
      <StyledPagenumberButton
        onClick={() => goToPage(moviesType, page)}
        key={`page${i + 1}`}
        activePageNumber={page === pageNumber}
      >
        {page}
      </StyledPagenumberButton>
    );
  });

  return (
    <StyledPaginationWrapper>
      <StyledBackButton
        onClick={() => goToPrevPage(moviesType)}
        disabled={pageNumber === 1}
      >
        <FontAwesomeIcon icon={faBackward} />
      </StyledBackButton>

      {pageNumber > 3 && (
        <>
          <StyledPagenumberButton onClick={() => goToPage(moviesType, 1)} bold>
            {1}
          </StyledPagenumberButton>
          <StyledDots>...</StyledDots>
        </>
      )}

      {pagesButtons.filter(
        (undefined, i) => i > pageNumber - 4 && i < pageNumber + 2
      )}

      {pageNumber < totalPages - 2 && (
        <>
          <StyledDots>...</StyledDots>
          <StyledPagenumberButton
            onClick={() => goToPage(moviesType, totalPages)}
            bold
          >
            {totalPages}
          </StyledPagenumberButton>
        </>
      )}

      <StyledNextButton
        onClick={() => goToNextPage(moviesType)}
        disabled={pageNumber === totalPages}
      >
        <FontAwesomeIcon icon={faForward} />
      </StyledNextButton>
    </StyledPaginationWrapper>
  );
};

export default MoviePagination;
