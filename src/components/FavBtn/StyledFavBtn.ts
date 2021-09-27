import styled, { css } from 'styled-components';

type BtnProps = {
  small?: boolean;
};

export const StyledFavBtn = styled.button<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-red);
  border-radius: 2rem;
  border: none;
  width: 6.8rem;
  height: 6.8rem;

  ${({ small }) =>
    small &&
    css`
      width: 2rem;
      height: 2rem;
      border-radius: 0.6rem;
      img {
        width: 1.8rem;
      }
    `}
`;
