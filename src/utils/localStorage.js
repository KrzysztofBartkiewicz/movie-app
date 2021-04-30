export const getMoviesFromLS = () => {
  return JSON.parse(localStorage.getItem('favs')) || [];
};
