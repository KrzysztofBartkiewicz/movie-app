import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { routes } from '../routes';
import FavMovies from '../views/FavMovies';
import Movies from '../views/Movies';

const Router = ({ movies }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path={routes.movies}
          component={() => <Movies movies={movies} />}
        />
        <Route path={routes.favMovies} component={FavMovies} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
