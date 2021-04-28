import React, { useContext } from 'react';
import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';
import RootContext from '../../context';
import styles from './FavBtn.module.scss';

const FavBtn = ({ movieToAdd, small, variant }) => {
  const context = useContext(RootContext);
  const handleClick = context.handleAddToFav;
  const { isAddedToFav } = movieToAdd;

  return (
    <button
      className={small ? styles.favBtnSmall : styles.favBtnBig}
      onClick={() => handleClick(movieToAdd)}
    >
      <img src={variant === 'add' ? plusIcon : minusIcon} alt="plus" />
    </button>
  );
};

export default FavBtn;
