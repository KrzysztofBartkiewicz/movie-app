import React from 'react';
import { Link } from 'react-router-dom';
import { baseImgUrl } from '../../utils/baseImgUrl';
import styles from './MovieListItem.module.scss';

const limitOverview = (str, limit) => {
  if (str.length > limit) {
    const newLength = str
      .split(' ')
      .reduce((acc, cur) => (acc < limit ? (acc += cur.length) : acc), 0);
    return str.slice(0, newLength).concat(' ...');
  }
  return str;
};

const MovieListItem = ({
  title,
  poster_path,
  release_date,
  vote_average,
  movie,
}) => {
  const year = release_date.slice(0, 4);

  return (
    <li className={styles.movieCard}>
      <Link
        to={{
          pathname: `/movie/${title.replace(/\s/g, '')}`,
          state: {
            ...movie,
          },
        }}
      >
        <img
          className={styles.movieImage}
          src={`${baseImgUrl}${poster_path}`}
          alt={title}
        />
      </Link>
      <h3 className={styles.movieTitle}>{title}</h3>
      <div className={styles.rateWrapper}>
        <img src={`${process.env.PUBLIC_URL}/star.svg`} alt="star" />
        <span className={styles.votes}>{vote_average}</span>
      </div>
    </li>
  );
};

export default MovieListItem;
