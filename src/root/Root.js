import React, { useState, useEffect } from 'react';
import RootContext from '../context';
import Router from '../routing/Router';
import { fetchTopRatedMovies } from '../api';

const Root = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    const fetchedMovies = await fetchTopRatedMovies();
    setHomeMovies([...fetchedMovies]);
  };

  return (
    <RootContext.Provider value={{ homeMovies, movies }}>
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
