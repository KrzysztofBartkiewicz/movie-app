import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to={routes.movies}>
            Movies
          </Link>
        </li>

        <li className={styles.item}>
          <Link className={styles.link} to={routes.favMovies}>
            Fav Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
