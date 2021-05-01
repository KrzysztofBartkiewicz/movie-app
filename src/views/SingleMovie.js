import React, { useContext, useEffect } from 'react';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import RootContext from '../context';
import styles from './sass/Views.module.scss';

const SingleMovie = ({ location }) => {
  const { id } = location.state;
  const context = useContext(RootContext);
  const { setIsNavbarVisible } = context;

  useEffect(() => {
    setIsNavbarVisible(false);
    return () => {
      setIsNavbarVisible(true);
    };
  });

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Details</h1>
      <MovieDetails movieId={id} />
    </div>
  );
};

export default SingleMovie;
