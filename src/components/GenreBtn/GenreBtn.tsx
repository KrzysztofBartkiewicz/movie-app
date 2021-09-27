import { FC, ReactNode } from 'react';
import { StyledGenreBtn } from './StyledGenreBtn';

type GenreBtnProps = {
  children: ReactNode;
  handleClick: () => void;
};

const GenreBtn: FC<GenreBtnProps> = ({ children, handleClick }) => {
  return <StyledGenreBtn onClick={handleClick}>{children}</StyledGenreBtn>;
};

export default GenreBtn;
