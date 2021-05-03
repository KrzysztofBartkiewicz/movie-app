import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import FavMovies from '../views/FavMovies';
import Movies from '../views/Movies';
import SingleMovie from '../views/SingleMovie';
import Home from '../views/Home';
import Blog from '../views/Blog';
import NavbarTemplate from '../templates/NavbarTemplate';

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          {/* <Route exact path={routes.home} component={() => <><Home /> </>} /> */}

          {/* <Route exact path={routes.home}>
            <Navbar/>
            <Home />
            <Footer/>
            
          </Route> */}

          <Route path={routes.movies} component={Movies} />
          <Route path={routes.favMovies} component={FavMovies} />
          <Route path={routes.blog} component={Blog} />
          <Route path={routes.singleMovie} component={SingleMovie} />
        </Switch>
      </NavbarTemplate>
    </BrowserRouter>
  );
};

export default Router;
