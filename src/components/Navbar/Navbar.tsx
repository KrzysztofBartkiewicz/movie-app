import { FC, useContext } from 'react';
import { routes } from '../../routes';
import RootContext from '../../context';
import {
  StyledList,
  StyledNavbar,
  StyledNavLink,
  StyledSubMenu,
  StyledSubLink,
} from './StyledNavbar';

const Navbar: FC = () => {
  const { isMenuVisible } = useContext(RootContext);

  const renderSubMenu = () => (
    <StyledSubMenu>
      <li>
        <StyledSubLink to={routes.popular}>Popular</StyledSubLink>
      </li>
      <li>
        <StyledSubLink to={routes.topRated}>Top Rated</StyledSubLink>
      </li>
    </StyledSubMenu>
  );

  return (
    <StyledNavbar>
      <StyledList isMenuVisible={isMenuVisible}>
        <li>
          <StyledNavLink to={routes.home} exact>
            Search
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.movies}>Movies</StyledNavLink>
          {renderSubMenu()}
        </li>
        <li>
          <StyledNavLink to={routes.blog} exact>
            Blog
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={routes.favMovies} exact>
            Fav Movies
          </StyledNavLink>
        </li>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
