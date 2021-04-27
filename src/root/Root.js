import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from '../routing/Router';
import RootContext from '../context';

const Root = () => {
  const [homeMovies, setHomeMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        // console.log(res);
        setHomeMovies([...res.data.results]);
        setMovies([...res.data.results]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <RootContext.Provider value={{ homeMovies, movies }}>
      <Router />
    </RootContext.Provider>
  );
};

export default Root;
