import { FC, useContext } from 'react';
import RootContext from '../../context';
import { StyledBar, StyledHamburger } from './StyledHamburger';

const Hamburger: FC = () => {
  const { isMenuVisible, setIsMenuVisible } = useContext(RootContext);

  return (
    <StyledHamburger onClick={() => setIsMenuVisible((prev: boolean) => !prev)}>
      <StyledBar isMenuVisible={isMenuVisible} />
    </StyledHamburger>
  );
};

export default Hamburger;
