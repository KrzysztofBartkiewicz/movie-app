import React, { useState } from 'react';
import styles from './Hamburger.module.scss';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className={`${styles.hamburger} ${isActive && styles.active}`}
    >
      <span className={styles.bar}></span>
    </button>
  );
};

export default Hamburger;
