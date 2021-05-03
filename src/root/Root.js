import React, { useState, useEffect } from 'react';
import RootContext from '../context';
import Router from '../routing/Router';
import { fetchPopulardMovies, fetchTopRatedMovies } from '../api';
import { getFavMoviesFromLS } from '../utils/localStorage';
import { movieTypes } from '../helpers/movieTypes';

const Root = () => {
  const [favMovies, setFavMovies] = useState(getFavMoviesFromLS());
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [popularTotalPages, setPopularTotalPages] = useState(0);
  const [topRatedTotalPages, setTopRatedTotalPages] = useState(0);

  const [topRatedMoviesPageNumber, setTopRatedMoviesPageNumber] = useState(1);
  const [popularMoviesPageNumber, setPopularMoviesPageNumber] = useState(1);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const setFavMoviesToLocalStorage = () => {
    localStorage.setItem('favs', JSON.stringify(favMovies));
  };

  useEffect(() => {
    setFavMoviesToLocalStorage();
  }, [favMovies]);

  useEffect(() => {
    getTopRatedMovies();
  }, [topRatedMoviesPageNumber]);

  useEffect(() => {
    getPopularMovies();
  }, [popularMoviesPageNumber]);

  const getTopRatedMovies = async () => {
    const fetchedMovies = await fetchTopRatedMovies(topRatedMoviesPageNumber);
    setTopRatedTotalPages(fetchedMovies.total_pages);
    setTopRatedMovies([...fetchedMovies.results]);
  };

  const getPopularMovies = async () => {
    const fetchedMovies = await fetchPopulardMovies(popularMoviesPageNumber);
    setPopularTotalPages(fetchedMovies.total_pages);
    setPopularMovies([...fetchedMovies.results]);
  };

  const goToNextPage = (movieType) => {
    if (movieType === movieTypes.topRated) {
      setTopRatedMoviesPageNumber((prev) => prev + 1);
    } else if (movieType === movieTypes.popular) {
      setPopularMoviesPageNumber((prev) => prev + 1);
    }
  };

  const goToPrevPage = (movieType) => {
    if (movieType === movieTypes.topRated) {
      setTopRatedMoviesPageNumber((prev) => prev - 1);
    } else if (movieType === movieTypes.popular) {
      setPopularMoviesPageNumber((prev) => prev - 1);
    }
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
        topRatedMoviesPageNumber,
        popularMoviesPageNumber,
        popularTotalPages,
        topRatedTotalPages,
        setIsNavbarVisible,
        handleAddToFav,
        handleRemoveFromFav,
        goToNextPage,
        goToPrevPage,
      }}
    >
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
