import { FC } from 'react';
import { Link } from 'react-router-dom';
import { baseImgUrlw300 } from '../../utils/baseImgUrl';
import FavBtn from '../FavBtn/FavBtn';
import noImage from '../../assets/images/noimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  StyledBtnWrapper,
  StyledCard,
  StyledImgWrapper,
  StyledMovieImage,
  StyledMovieTitle,
  StyledRateWrapper,
  StyledVotes,
} from './StyledMovieListItem';
import { MovieData } from '../../interfaces';

const MovieListItem: FC<MovieData> = ({ ...movie }) => {
  const { id, title, poster_path, vote_average } = movie;
  return (
    <StyledCard>
      <Link
        to={{
          pathname: `/movie/${title.replace(/\s/g, '')}`,
          state: { id },
        }}
      >
        <StyledImgWrapper>
          <StyledBtnWrapper>
            <FavBtn movie={movie} />
          </StyledBtnWrapper>
          {poster_path ? (
            <StyledMovieImage
              src={`${baseImgUrlw300}${poster_path}`}
              alt={title}
            />
          ) : (
            <StyledMovieImage src={noImage} alt="No image avaliable" />
          )}
        </StyledImgWrapper>
      </Link>
      <StyledMovieTitle>{title}</StyledMovieTitle>
      <StyledRateWrapper>
        <FontAwesomeIcon icon={faStar} color="#FCC419" size="lg" />
        <StyledVotes>{vote_average}</StyledVotes>
      </StyledRateWrapper>
    </StyledCard>
  );
};

export default MovieListItem;
