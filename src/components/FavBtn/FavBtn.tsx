import { FC, useContext } from 'react';
import RootContext from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { StyledFavBtn } from './StyledFavBtn';

import { MovieData } from '../../interfaces';

type FavBtnProps = {
  movie: MovieData;
  small?: boolean;
};

const FavBtn: FC<FavBtnProps> = ({ movie, small }) => {
  const { favMovies, handleRemoveFromFav, handleAddToFav } =
    useContext(RootContext);

  const isAddedToFav = favMovies.some(
    (favMovie: MovieData) => favMovie.id === movie.id
  );
  const handleClick = isAddedToFav ? handleRemoveFromFav : handleAddToFav;

  return (
    <StyledFavBtn
      small={small}
      onClick={(event) => {
        event.preventDefault();
        handleClick(movie);
      }}
    >
      <FontAwesomeIcon
        icon={isAddedToFav ? faMinus : faPlus}
        color="#FFF"
        size="lg"
      />
    </StyledFavBtn>
  );
};

export default FavBtn;
