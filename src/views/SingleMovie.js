import React from 'react';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import styles from './sass/Views.module.scss';

const SingleMovie = ({ location }) => {
  const { id } = location.state;

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Details</h1>
      <MovieDetails movieId={id} />
    </div>
  );
};

export default SingleMovie;
