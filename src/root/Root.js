import React, { Component } from 'react';
import axios from 'axios';
import Router from '../routing/Router';

class Root extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res);
        this.setState({
          movies: [...res.data.results],
        });
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <>
        <Router movies={this.state.movies} />
      </>
    );
  }
}

export default Root;
