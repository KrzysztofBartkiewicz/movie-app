import React, { useContext } from 'react';
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';
import RootContext from '../../context';
import styles from './FavBtn.module.scss';

const FavBtn = ({ movie, small }) => {
  const context = useContext(RootContext);
  const isAddedToFav = context.favMovies.some(
    (movieEl) => movieEl.id === movie.id
  );
  const handleClick = isAddedToFav
    ? context.handleRemoveFromFav
    : context.handleAddToFav;

  return (
    <button
      className={small ? styles.favBtnSmall : styles.favBtnBig}
      onClick={() => handleClick(movie)}
    >
      <img src={isAddedToFav ? minusIcon : plusIcon} alt="button icon" />
    </button>
  );
};

export default FavBtn;
