import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const renderSubMenu = () => (
    <ul className={styles.subMenu}>
      <li className={styles.subItem}>
        <NavLink className={styles.subLink} to={routes.popular}>
          Popular
        </NavLink>
      </li>
      <li className={styles.subItem}>
        <NavLink className={styles.subLink} to={routes.topRated}>
          Top Rated
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={routes.home}
            exact
          >
            Search
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={routes.movies}
          >
            Movies
          </NavLink>
          {renderSubMenu()}
        </li>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={routes.blog}
            exact
          >
            Blog
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={routes.favMovies}
            exact
          >
            Fav Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
