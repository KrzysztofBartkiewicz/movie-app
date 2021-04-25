import React from 'react';
import { baseImgUrl } from '../utils/baseImgUrl';

const SingleMovie = ({ location }) => {
  const { title, poster_path, id } = location.state;

  return (
    <>
      <img src={`${baseImgUrl}${poster_path}`} alt={title} />
      <h2>{title}</h2>

      <a
        // className={styles.more}
        href={`https://www.themoviedb.org/movie/${id}`}
        target="_blank"
        rel="noreferrer"
      >
        Go to orginal movie page
      </a>
    </>
  );
};

export default SingleMovie;
