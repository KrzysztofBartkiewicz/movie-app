import React from 'react';
import { Link } from 'react-router-dom';
import { baseImgUrlw300 } from '../../utils/baseImgUrl';
import styles from './MovieListItem.module.scss';
import FavBtn from '../FavBtn/FavBtn';
import noImage from '../../assets/images/noimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieListItem = ({ id, title, poster_path, vote_average, movie }) => {
  return (
    <li className={styles.movieCard}>
      <Link
        to={{
          pathname: `/movie/${title.replace(/\s/g, '')}`,
          state: { id },
        }}
      >
        <div className={styles.imgWrapper}>
          <div className={styles.btnWrapper}>
            <FavBtn movie={movie} />
          </div>
          {poster_path ? (
            <img
              className={styles.movieImage}
              src={`${baseImgUrlw300}${poster_path}`}
              alt={title}
            />
          ) : (
            <img
              className={styles.movieImage}
              src={noImage}
              alt="No image avaliable"
            />
          )}
        </div>
      </Link>
      <h3 className={styles.movieTitle}>{title}</h3>
      <div className={styles.rateWrapper}>
        <FontAwesomeIcon icon={faStar} color="#FCC419" size="lg" />
        <span className={styles.votes}>{vote_average}</span>
      </div>
    </li>
  );
};

export default MovieListItem;
