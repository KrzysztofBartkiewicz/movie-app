import axios from 'axios';

export const fetchTopRatedMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.error(err));
};

export const fetchPopulardMovies = () => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.error(err));
};

export const fetchSingleMovie = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export const fetchCast = (id) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    )
    .then((res) => {
      return res.data.cast;
    })
    .catch((err) => console.error(err));
};
