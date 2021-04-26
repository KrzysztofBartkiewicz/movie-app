import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseImgUrlw500, baseImgUrlw200 } from '../utils/baseImgUrl';
import GenreBtn from '../components/GenreBtn/GenreBtn';
import FavBtn from '../components/FavBtn/FavBtn';
import styles from './sass/Views.module.scss';

const SingleMovie = ({ location }) => {
  const { id } = location.state;
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

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

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        // console.log(res);
        setMovie({ ...res.data });
      })
      .catch((err) => console.error(err));

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res);
        setCast([...res.data.cast]);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Details</h1>
      <div className={styles.movieWrapper}>
        <img
          className={styles.movieImage}
          src={`${baseImgUrlw500}${poster_path}`}
          alt={title}
        />
        <div className={styles.contentWrapper}>
          <h2 className={styles.titleHeading}>{title}</h2>

          <div className={styles.detailsWrapper}>
            <span className={styles.releaseDate}>
              {release_date ? release_date.slice(0, 4) : null}
            </span>

            <div className={styles.votesWrapper}>
              <img
                className={styles.votesIcon}
                src={`${process.env.PUBLIC_URL}/star.svg`}
                alt="star"
              />
              <span className={styles.votes}>
                <span>{vote_average}</span>/10
              </span>
              <span className={styles.votesTotal}>{vote_count}</span>
            </div>

            <span className={styles.duration}>{`${runtime} min.`}</span>
            <FavBtn />
          </div>

          <ul className={styles.genresList}>
            {genres
              ? genres.map(({ id, name }) => (
                  <li key={id} className={styles.genreItem}>
                    <GenreBtn>{name}</GenreBtn>
                  </li>
                ))
              : null}
          </ul>

          <div className={styles.overviewWrapper}>
            <h3 className={styles.overviewHeading}>Plot Summary</h3>
            <span className={styles.overview}>{overview}</span>
          </div>

          <div className={styles.castWrapper}>
            <h3 className={styles.castHeading}>Cast</h3>
            <ul className={styles.castList}>
              {cast
                ? cast.slice(0, 5).map(({ name, character, profile_path }) => (
                    <li className={styles.castItem}>
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
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
