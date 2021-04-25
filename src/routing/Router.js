import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import Navbar from '../components/Navbar/Navbar';
import FavMovies from '../views/FavMovies';
import Movies from '../views/Movies';
import SingleMovie from '../views/SingleMovie';
import Home from '../views/Home';
import Blog from '../views/Blog';

const Router = ({ movies }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path={routes.home}
          component={() => <Home movies={movies} />}
        />
        <Route path={routes.movies} component={Movies} />
        <Route path={routes.favMovies} component={FavMovies} />
        <Route path={routes.blog} component={Blog} />
        <Route path={routes.singleMovie} component={SingleMovie} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
