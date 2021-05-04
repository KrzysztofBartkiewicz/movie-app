import React, { useState, useEffect } from 'react';
import { baseImgUrlw500, baseImgUrlw200 } from '../../utils/baseImgUrl';
import GenreBtn from '../GenreBtn/GenreBtn';
import { fetchSingleMovie, fetchCast } from '../../api';
import starIcon from '../../assets/icons/star.svg';
import styles from './MovieDetails.module.scss';
import FavBtn from '../FavBtn/FavBtn';
import noImage from '../../assets/images/noimage.png';

const MovieDetails = ({ movieId }) => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

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
    <div className={styles.castWrapper}>
      <h3 className={styles.castHeading}>Cast</h3>
      <ul className={styles.castList}>
        {cast
          ? cast
              .slice(0, 5)
              .map(({ name, character, profile_path, cast_id }) => (
                <li key={cast_id} className={styles.castItem}>
                  <div
                    className={styles.castImage}
                    style={{
                      backgroundImage: `url(${baseImgUrlw200}${profile_path})`,
                    }}
                  ></div>
                  <span className={styles.castName}>{name}</span>
                  <span className={styles.castCharacter}>{character}</span>
                </li>
              ))
          : null}
      </ul>
    </div>
  );

  const renderGenresList = () => (
    <ul className={styles.genresList}>
      {genres
        ? genres.map(({ id, name }) => (
            <li key={id} className={styles.genreItem}>
              <GenreBtn>{name}</GenreBtn>
            </li>
          ))
        : null}
    </ul>
  );

  const renderDetailsWrapper = () => (
    <div className={styles.detailsWrapper}>
      <span className={styles.releaseDate}>
        {release_date ? release_date.slice(0, 4) : null}
      </span>

      <div className={styles.votesWrapper}>
        <img className={styles.votesIcon} src={starIcon} alt="star" />
        <span className={styles.votes}>
          <span>{vote_average}</span>/10
        </span>
        <span className={styles.votesTotal}>{vote_count}</span>
      </div>

      <span className={styles.duration}>{`${runtime} min.`}</span>
      <FavBtn movie={movie} />
    </div>
  );

  return (
    <div className={styles.movieWrapper}>
      {poster_path ? (
        <img
          className={styles.movieImage}
          src={`${baseImgUrlw500}${poster_path}`}
          alt={title}
        />
      ) : (
        <img
          className={styles.noImage}
          src={noImage}
          alt="No image avaliable"
        />
      )}
      <div className={styles.contentWrapper}>
        <h2 className={styles.titleHeading}>{title}</h2>
        {renderDetailsWrapper()}
        {renderGenresList()}
        <div className={styles.overviewWrapper}>
          <h3 className={styles.overviewHeading}>Plot Summary</h3>
          <span className={styles.overview}>{overview}</span>
        </div>
        {renderMovieCast()}
      </div>
    </div>
  );
};

export default MovieDetails;
