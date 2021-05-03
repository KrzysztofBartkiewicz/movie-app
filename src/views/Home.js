import React, { useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { fetchSearchMovies } from '../api';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './sass/Views.module.scss';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(inputValue);
  };

  const getMovies = async (query) => {
    const fetchedMovies = await fetchSearchMovies(query);
    if (!fetchedMovies || fetchedMovies.length === 0) {
      setError('No results');
      return;
    }
    setError(false);
    setMovies([...fetchedMovies]);
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
      {error ? (
        <h3 className={styles.info}>{error}</h3>
      ) : (
        <MovieList moviesArray={movies} />
      )}
    </div>
  );
};

export default Movies;
