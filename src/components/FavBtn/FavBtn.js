import React from 'react';
import styles from './FavBtn.module.scss';

const FavBtn = ({ handleClick }) => {
  return (
    <button className={styles.favBtn} onClick={handleClick}>
      <img src={`${process.env.PUBLIC_URL}/plus.svg`} alt="plus" />
    </button>
  );
};

export default FavBtn;
