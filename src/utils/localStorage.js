export const getFavMoviesFromLS = () => {
  return JSON.parse(localStorage.getItem('favs')) || [];
};
