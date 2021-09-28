import { useState, useEffect, FC } from 'react';
import { baseImgUrlw500, baseImgUrlw200 } from '../../utils/baseImgUrl';
import GenreBtn from '../GenreBtn/GenreBtn';
import { fetchSingleMovie, fetchCast } from '../../api';
import styles from './MovieDetails.module.scss';
import FavBtn from '../FavBtn/FavBtn';
import noImage from '../../assets/images/noimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { SingleMovieData, CastMember } from '../../interfaces';
import {
  StyledCastImage,
  StyledCastItem,
  StyledCastWrapper,
  StyledContentWrapper,
  StyledDetailsWWrapper,
  StyledGenresList,
  StyledImagePlaceholder,
  StyledMovieImage,
  StyledMovieWrapper,
  StyledOverviewWrapper,
  StyledVotes,
  StyledVotesWrapper,
} from './StyledMovieDeatails';

type MovieDetailsProps = {
  movieId: number;
};

const MovieDetails: FC<MovieDetailsProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<SingleMovieData>({} as SingleMovieData);
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    getSingleMovie();
    getCast();
  }, []);

  const getSingleMovie = async () => {
    const fetchedMovie = await fetchSingleMovie(movieId);
    setMovie({ ...fetchedMovie });
  };

  const getCast = async () => {
    const fetchedCast = await fetchCast(movieId);
    setCast([...fetchedCast]);
  };

  const {
    genres,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    title,
    runtime,
    overview,
  } = movie;

  const renderMovieCast = () => (
    <StyledCastWrapper>
      <h3>Cast</h3>
      <ul>
        {cast
          ? cast
              .slice(0, 5)
              .map(({ name, character, profile_path, cast_id }) => (
                <StyledCastItem key={cast_id}>
                  <StyledCastImage
                    bgImage={`url(${baseImgUrlw200}${profile_path})`}
                  />
                  <span>{name}</span>
                  <span>{character}</span>
                </StyledCastItem>
              ))
          : null}
      </ul>
    </StyledCastWrapper>
  );

  const renderGenresList = () => (
    <StyledGenresList>
      {genres
        ? genres.map(({ id, name }) => (
            <li key={id}>
              <GenreBtn>{name}</GenreBtn>
            </li>
          ))
        : null}
    </StyledGenresList>
  );

  const renderDetailsWrapper = () => (
    <StyledDetailsWWrapper>
      <span>{release_date ? release_date.slice(0, 4) : null}</span>

      <StyledVotesWrapper>
        <FontAwesomeIcon icon={faStar} color="#FCC419" size="lg" />
        <StyledVotes>
          <span>{vote_average}</span>/10
        </StyledVotes>
        <span>{vote_count}</span>
      </StyledVotesWrapper>

      <span>{`${runtime} min.`}</span>
      <FavBtn movie={movie} />
    </StyledDetailsWWrapper>
  );

  return (
    <StyledMovieWrapper>
      {poster_path ? (
        <StyledMovieImage src={`${baseImgUrlw500}${poster_path}`} alt={title} />
      ) : (
        <StyledImagePlaceholder src={noImage} alt="No image avaliable" />
      )}
      <StyledContentWrapper>
        <h2>{title}</h2>
        {renderDetailsWrapper()}
        {renderGenresList()}
        <StyledOverviewWrapper>
          <h3>Plot Summary</h3>
          <span>{overview}</span>
        </StyledOverviewWrapper>
        {renderMovieCast()}
      </StyledContentWrapper>
    </StyledMovieWrapper>
  );
};

export default MovieDetails;
