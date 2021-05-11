import React, { useContext } from 'react';
import RootContext from '../../context';
import styles from './FavBtn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const FavBtn = ({ movie, small }) => {
  const context = useContext(RootContext);
  const { favMovies, handleRemoveFromFav, handleAddToFav } = context;
  const isAddedToFav = favMovies.some((favMovie) => favMovie.id === movie.id);
  const handleClick = isAddedToFav ? handleRemoveFromFav : handleAddToFav;

  return (
    <button
      className={small ? styles.favBtnSmall : styles.favBtnBig}
      onClick={(event) => {
        event.preventDefault();
        handleClick(movie);
      }}
    >
      <FontAwesomeIcon
        icon={isAddedToFav ? faMinus : faPlus}
        color="#FFF"
        size="lg"
      />
    </button>
  );
};

export default FavBtn;
