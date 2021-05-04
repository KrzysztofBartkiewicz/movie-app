import React, { useContext, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './sass/Views.module.scss';
import RootContext from '../context';
import { movieTypes } from '../helpers/movieTypes';

const Movies = () => {
  const context = useContext(RootContext);
  const { setQuery, searchedMovies } = context;

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputValue);
  };

  return (
    <div className={styles.view}>
      <h1 className={styles.header}>Search</h1>
      <SearchBox
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={inputValue}
        placeholder="Search for movies"
      />
      {!searchedMovies || searchedMovies.length === 0 ? (
        <h3 className={styles.info}>No results</h3>
      ) : (
        <MovieList
          moviesType={movieTypes.searched}
          moviesArray={searchedMovies}
        />
      )}
    </div>
  );
};

export default Movies;
