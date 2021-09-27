import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSubMenu = styled.ul`
  display: none;
  position: absolute;
  left: 2rem;
  border: 1px solid var(--color-grey);
  border-radius: 0.5rem;

  li {
    padding: 1rem 0;
    font-size: 2rem;
    text-decoration: none;
    color: inherit;

    &:hover {
      background-color: var(--color-red);
      color: #fff;
    }
  }
`;

export const StyledSubLink = styled(NavLink)`
  padding: 1rem 0;
  font-size: 2rem;
  text-decoration: none;
  color: inherit;
`;

export const StyledNavbar = styled.nav`
  width: 100vw;
  margin-top: 3rem;
  position: relative;

  ${({ theme }) => theme.mq.smBp} {
    height: 10rem;
  }
`;

type ListProps = {
  isMenuVisible: boolean;
};

export const StyledList = styled.ul<ListProps>`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  transition: left 1s;

  ${({ isMenuVisible }) =>
    isMenuVisible &&
    css`
      left: 0;
    `}

  ${({ theme }) => theme.mq.smBp} {
    width: 100vw;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 50;
  }

  li {
    position: relative;

    &:hover ${StyledSubMenu} {
      display: block;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 2rem;
  font-size: 3.2rem;
  font-weight: 600;
  color: var(--color-black);
  text-decoration: none;
  transition: all 0.3s;

  &.active {
    &::after {
      content: '';
      display: block;
      width: 4rem;
      height: 0.6rem;
      margin-top: 1.5rem;
      border-radius: 0.5rem;
      background: var(--color-red);
    }
  }
`;
