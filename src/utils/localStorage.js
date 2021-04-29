export const addMovieToLS = (movie) => {
  let favsArr = JSON.parse(localStorage.getItem('favs')) || [];
  favsArr.push(movie);
  localStorage.setItem('favs', JSON.stringify(favsArr));
};

export const removeMovieFromLS = (movie) => {
  let favsArr = JSON.parse(localStorage.getItem('favs'));
  const indexToRemove = favsArr.findIndex((movieId) => movieId === movie);
  favsArr.splice(indexToRemove, 1);
  localStorage.setItem('favs', JSON.stringify(favsArr));
};

export const getMoviesFromLS = () => {
  return JSON.parse(localStorage.getItem('favs')) || [];
};
