import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.movies}>Movies</Link>
        </li>

        <li>
          <Link to={routes.favMovies}>Fav Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
