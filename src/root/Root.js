import React, { useState, useEffect } from 'react';
import RootContext from '../context';
import Router from '../routing/Router';
import { fetchTopRatedMovies } from '../api';
import { getMoviesFromLS } from '../utils/localStorage';

const Root = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState(getMoviesFromLS());

  const setFavMoviesToLocalStorage = () => {
    localStorage.setItem('favs', JSON.stringify(favMovies));
  };

  useEffect(() => {
    setFavMoviesToLocalStorage();
  }, [favMovies]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const fetchedMovies = await fetchTopRatedMovies();
    setHomeMovies([...fetchedMovies]);
    setMovies([...fetchedMovies]);
  };

  const handleAddToFav = (movieId) => {
    const selectedMovie = homeMovies.find((movie) => movie.id === movieId);

    setFavMovies((prev) => [...prev, selectedMovie]);
  };

  const handleRemoveFromFav = (movieId) => {
    const filteredFavMovies = favMovies.filter((movie) => movie.id !== movieId);
    setFavMovies([...filteredFavMovies]);
  };

  return (
    <RootContext.Provider
      value={{
        homeMovies,
        movies,
        favMovies,
        handleAddToFav,
        handleRemoveFromFav,
      }}
    >
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
