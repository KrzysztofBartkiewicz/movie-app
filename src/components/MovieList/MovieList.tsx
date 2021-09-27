import { FC, Fragment } from 'react';
import { movieTypes } from '../../helpers/movieTypes';
import { MovieData } from '../../interfaces';
import MovieListItem from '../MovieListItem/MovieListItem';
import MoviePagination from '../MoviePagination/MoviePagination';
import { StyledMovieList } from './StyledMovieList';

type ListProps = {
  moviesArray: MovieData[];
  moviesType: string;
};

const MovieList: FC<ListProps> = ({ moviesArray, moviesType }) => {
  return (
    <>
      {moviesType !== movieTypes.favorites && (
        <MoviePagination moviesType={moviesType} />
      )}
      <StyledMovieList>
        {moviesArray.map((movie) => (
          <Fragment key={movie.id}>
            <MovieListItem {...movie} movie={movie} />
          </Fragment>
        ))}
      </StyledMovieList>
    </>
  );
};

export default MovieList;
