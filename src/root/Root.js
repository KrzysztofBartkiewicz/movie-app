import React, { useState, useEffect } from 'react';
import RootContext from '../context';
import Router from '../routing/Router';
import { fetchTopRatedMovies } from '../api';
import { addMovieToLS, removeMovieFromLS } from '../utils/localStorage';

const Root = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
    getMoviesFromLocalStorage();
  }, []);

  const getMoviesFromLocalStorage = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavMovies([...favs]);
  };

  const getTopRatedMovies = async () => {
    const fetchedMovies = await fetchTopRatedMovies();
    setHomeMovies([...fetchedMovies]);
  };

  const handleAddToFav = (movie) => {
    setFavMovies((prev) => [...prev, movie]);
    addMovieToLS(movie);
  };

  const handleRemoveFromFav = (movie) => {
    const favs = [...favMovies];
    const indexToRemove = favMovies.findIndex(
      (movieEl) => movieEl.id === movie.id
    );
    favs.splice(indexToRemove, 1);
    setFavMovies(favs);
    removeMovieFromLS(movie);
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
