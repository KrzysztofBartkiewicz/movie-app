import React from 'react';
import styles from './GenreBtn.module.scss';

const GenreBtn = ({ children, handleClick }) => {
  return (
    <button className={styles.btn} onClick={handleClick}>
      {children}
    </button>
  );
};

export default GenreBtn;
