import { FC, useContext } from 'react';
import RootContext from '../../context';
import { StyledBar, StyledHamburger } from './StyledHamburger';

const Hamburger: FC = () => {
  const { isMenuVisible, toggleMenuVisibility } = useContext(RootContext);

  return (
    <StyledHamburger onClick={() => toggleMenuVisibility(!isMenuVisible)}>
      <StyledBar isMenuVisible={isMenuVisible} />
    </StyledHamburger>
  );
};

export default Hamburger;
