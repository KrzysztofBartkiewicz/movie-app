import React from 'react';
import { Link } from 'react-router-dom';
import { baseImgUrlw300 } from '../../utils/baseImgUrl';
import starIcon from '../../assets/icons/star.svg';
import styles from './MovieListItem.module.scss';
import FavBtn from '../FavBtn/FavBtn';
import noImage from '../../assets/images/noimage.png';

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
              className={styles.noImage}
              src={noImage}
              alt="No image avaliable"
            />
          )}
        </div>
      </Link>
      <h3 className={styles.movieTitle}>{title}</h3>
      <div className={styles.rateWrapper}>
        <img src={starIcon} alt="star" />
        <span className={styles.votes}>{vote_average}</span>
      </div>
    </li>
  );
};

export default MovieListItem;
