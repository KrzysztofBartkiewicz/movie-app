import axios from 'axios';

export const fetchTopRatedMovies = (pageNumber: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export const fetchPopulardMovies = (pageNumber: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageNumber}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export const fetchSingleMovie = (id: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};

export const fetchCast = (id: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((res) => {
      return res.data.cast;
    })
    .catch((err) => console.error(err));
};

export const fetchSearchMovies = (query: string, pageNumber: number) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=en-US&page=${pageNumber}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
};
