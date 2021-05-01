import React, { useState, useEffect } from 'react';
import RootContext from '../context';
import Router from '../routing/Router';
import { fetchPopulardMovies, fetchTopRatedMovies } from '../api';
import { getFavMoviesFromLS } from '../utils/localStorage';

const Root = () => {
  const [favMovies, setFavMovies] = useState(getFavMoviesFromLS());
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const setFavMoviesToLocalStorage = () => {
    localStorage.setItem('favs', JSON.stringify(favMovies));
  };

  useEffect(() => {
    setFavMoviesToLocalStorage();
  }, [favMovies]);

  useEffect(() => {
    getTopRatedMovies();
    getPopularMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const fetchedMovies = await fetchTopRatedMovies();
    setTopRatedMovies([...fetchedMovies]);
  };

  const getPopularMovies = async () => {
    const fetchedMovies = await fetchPopulardMovies();
    setPopularMovies([...fetchedMovies]);
  };

  const handleAddToFav = (movieId) => {
    const selectedMovie =
      topRatedMovies.find((movie) => movie.id === movieId) ||
      popularMovies.find((movie) => movie.id === movieId);
    setFavMovies((prev) => [...prev, selectedMovie]);
  };

  const handleRemoveFromFav = (movieId) => {
    const filteredFavMovies = favMovies.filter((movie) => movie.id !== movieId);
    setFavMovies([...filteredFavMovies]);
  };

  return (
    <RootContext.Provider
      value={{
        popularMovies,
        topRatedMovies,
        favMovies,
        isNavbarVisible,
        setIsNavbarVisible,
        handleAddToFav,
        handleRemoveFromFav,
      }}
    >
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
