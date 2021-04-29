import React, { useContext } from 'react';
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';
import RootContext from '../../context';
import { getMoviesFromLS } from '../../utils/localStorage';
import styles from './FavBtn.module.scss';

const FavBtn = ({ movie, small }) => {
  const storedMovies = getMoviesFromLS();
  const isAddedToLS = storedMovies.some((movieEl) => movieEl.id === movie.id);

  const context = useContext(RootContext);
  const handleClick = isAddedToLS
    ? context.handleRemoveFromFav
    : context.handleAddToFav;

  return (
    <button
      className={small ? styles.favBtnSmall : styles.favBtnBig}
      onClick={() => handleClick(movie)}
    >
      <img src={isAddedToLS ? minusIcon : plusIcon} alt="button icon" />
    </button>
  );
};

export default FavBtn;
