import React from 'react';
import { Link } from 'react-router-dom';
import { baseImgUrlw300 } from '../../utils/baseImgUrl';
import starIcon from '../../assets/icons/star.svg';
import styles from './MovieListItem.module.scss';
import FavBtn from '../FavBtn/FavBtn';

const MovieListItem = ({ id, title, poster_path, vote_average, movie }) => {
  return (
    <li className={styles.movieCard}>
      <Link
        to={{
          pathname: `/movie/${title.replace(/\s/g, '')}`,
          state: {
            id: id,
          },
        }}
      >
        <img
          className={styles.movieImage}
          src={`${baseImgUrlw300}${poster_path}`}
          alt={title}
        />
      </Link>
      <h3 className={styles.movieTitle}>{title}</h3>
      <div className={styles.rateWrapper}>
        <img src={starIcon} alt="star" />
        <span className={styles.votes}>{vote_average}</span>
        <div className={styles.buttonWrapper}>
          <FavBtn small movie={movie} />
        </div>
      </div>
    </li>
  );
};

export default MovieListItem;
