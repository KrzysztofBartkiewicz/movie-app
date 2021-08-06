import React, { useState, useEffect } from 'react';
import RootContext from '../context';
import Router from '../routing/Router';
import {
  fetchPopulardMovies,
  fetchTopRatedMovies,
  fetchSearchMovies,
} from '../api';
import { getFavMoviesFromLS } from '../utils/localStorage';
import { movieTypes } from '../helpers/movieTypes';

const Root = () => {
  const [favMovies, setFavMovies] = useState(getFavMoviesFromLS());
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const [popularTotalPages, setPopularTotalPages] = useState(0);
  const [topRatedTotalPages, setTopRatedTotalPages] = useState(0);
  const [searchedTotalPages, setSearchedTotalPages] = useState(0);

  const [topRatedMoviesPageNumber, setTopRatedMoviesPageNumber] = useState(1);
  const [popularMoviesPageNumber, setPopularMoviesPageNumber] = useState(1);
  const [searchedMoviesPageNumber, setSearchedMoviesPageNumber] = useState(1);

  const [query, setQuery] = useState('');

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

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

  useEffect(() => {
    if (query !== '') {
      searchMovies();
    }
    setSearchedMoviesPageNumber(1);
  }, [query]);

  useEffect(() => {
    if (query !== '') {
      searchMovies();
    }
  }, [searchedMoviesPageNumber]);

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

  const searchMovies = async () => {
    const fetchedMovies = await fetchSearchMovies(
      query,
      searchedMoviesPageNumber
    );
    setSearchedTotalPages(fetchedMovies.total_pages);
    setSearchedMovies([...fetchedMovies.results]);
  };

  const goToNextPage = (movieType) => {
    if (movieType === movieTypes.topRated) {
      setTopRatedMoviesPageNumber((prev) => prev + 1);
    }
    if (movieType === movieTypes.popular) {
      setPopularMoviesPageNumber((prev) => prev + 1);
    }
    if (movieType === movieTypes.searched) {
      setSearchedMoviesPageNumber((prev) => prev + 1);
    }
  };

  const goToPrevPage = (movieType) => {
    if (movieType === movieTypes.topRated) {
      setTopRatedMoviesPageNumber((prev) => prev - 1);
    }
    if (movieType === movieTypes.popular) {
      setPopularMoviesPageNumber((prev) => prev - 1);
    }
    if (movieType === movieTypes.searched) {
      setSearchedMoviesPageNumber((prev) => prev - 1);
    }
  };

  const goToPage = (movieType, page) => {
    if (movieType === movieTypes.topRated) {
      setTopRatedMoviesPageNumber(page);
    }
    if (movieType === movieTypes.popular) {
      setPopularMoviesPageNumber(page);
    }
    if (movieType === movieTypes.searched) {
      setSearchedMoviesPageNumber(page);
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
        searchedMovies,
        isNavbarVisible,
        topRatedMoviesPageNumber,
        popularMoviesPageNumber,
        searchedMoviesPageNumber,
        popularTotalPages,
        topRatedTotalPages,
        searchedTotalPages,
        isMenuVisible,
        setIsMenuVisible,
        setQuery,
        goToPage,
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
