import React from 'react';
import { baseImgUrl } from '../../utils/baseImgUrl';

const MovieListItem = ({ id, title, poster_path }) => {
  return (
    <li key={id}>
      <img src={`${baseImgUrl}${poster_path}`} alt={title} />
      <h3>{title}</h3>
      <button>add to fav</button>
    </li>
  );
};

export default MovieListItem;
