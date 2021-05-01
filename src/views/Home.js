import React, { useContext, useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import RootContext from '../context';
import { fetchSearchMovies } from '../api';
import styles from './sass/Views.module.scss';
import SearchBox from '../components/SearchBox/SearchBox';

const Movies = () => {
  return (
    <div className={styles.view}>
      <SearchBox />
    </div>
  );
};

export default Movies;
