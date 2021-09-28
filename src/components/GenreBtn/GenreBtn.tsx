import { FC } from 'react';
import { StyledGenreBtn } from './StyledGenreBtn';

type GenreBtnProps = {
  handleClick?: () => void;
};

const GenreBtn: FC<GenreBtnProps> = ({ children, handleClick }) => {
  return <StyledGenreBtn onClick={handleClick}>{children}</StyledGenreBtn>;
};

export default GenreBtn;
