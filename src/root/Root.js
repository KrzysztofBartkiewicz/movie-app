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

  const handleAddToFav = (movieToAdd) => {
    setFavMovies((prev) => [...prev, movieToAdd]);
  };

  const handleRemoveFromFav = (movieToRemove) => {
    const filteredFavMovies = favMovies.filter(
      (movie) => movie.id !== movieToRemove.id
    );
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
