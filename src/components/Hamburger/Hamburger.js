import React, { useContext } from 'react';
import RootContext from '../../context';
import styles from './Hamburger.module.scss';

const Hamburger = () => {
  const { isMenuVisible, setIsMenuVisible } = useContext(RootContext);

  return (
    <button
      onClick={() => setIsMenuVisible((prev) => !prev)}
      className={`${styles.hamburger} ${isMenuVisible && styles.active}`}
    >
      <span className={styles.bar}></span>
    </button>
  );
};

export default Hamburger;
