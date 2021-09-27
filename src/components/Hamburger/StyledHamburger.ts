import styled, { css } from 'styled-components';

type BarProps = {
  isMenuVisible: boolean;
};

export const StyledHamburger = styled.button`
  display: none;
  position: fixed;
  top: 3rem;
  right: 3rem;
  padding: 2rem 1.5rem;
  background-color: transparent;
  z-index: 100;
  border: none;
  outline: none;

  ${({ theme }) => theme.mq.smBp} {
    display: block;
  }
`;

export const StyledBar = styled.span<BarProps>`
  display: block;
  width: 4rem;
  height: 3px;
  background-color: var(--color-black);
  position: relative;
  background-color: ${({ isMenuVisible }) => isMenuVisible && 'transparent'};
  transition: background-color 0.4s 0.3s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: var(--color-black);
    left: 0;
    transition: transform 0.4s 0.3s ease-in-out;
  }

  &::before {
    top: -1rem;

    ${({ isMenuVisible }) =>
      isMenuVisible &&
      css`
        transform: translateY(1rem) rotate(-45deg);
      `}
  }

  &::after {
    top: 1rem;

    ${({ isMenuVisible }) =>
      isMenuVisible &&
      css`
        transform: translateY(-1rem) rotate(45deg);
      `}
  }
`;
