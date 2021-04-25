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
  id,
  title,
  poster_path,
  release_date,
  vote_average,
  vote_count,
  overview,
  movie,
}) => {
  const year = release_date.slice(0, 4);

  return (
    <li className={styles.movie}>
      <div className={styles.left}>
        <img
          className={styles.image}
          src={`${baseImgUrl}${poster_path}`}
          alt={title}
        />
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <span className={styles.year}>{year}</span>
          <span
            className={styles.rate}
          >{`${vote_average} / ${vote_count}`}</span>
        </div>
        <span className={styles.overview}>{limitOverview(overview, 280)}</span>
        <Link
          to={{
            pathname: `/movie/${title.replace(/\s/g, '')}`,
            state: {
              ...movie,
            },
          }}
          className={styles.more}
        >
          Read more
        </Link>
        {/* <a
          className={styles.more}
          href={`https://www.themoviedb.org/movie/${id}`}
        >
          Read more
        </a> */}
        <button className={styles.btn}>add to fav</button>
      </div>
    </li>
  );
};

export default MovieListItem;
