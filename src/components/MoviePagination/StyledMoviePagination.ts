import styled, { css } from 'styled-components';

export const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const buttonStyles = css`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--color-red);
  color: #fff;
  &:disabled {
    background-color: var(--color-grey-2);
    filter: blur(1px);
    cursor: default;
  }
`;

export const StyledBackButton = styled.button`
  ${buttonStyles}
  margin-right: 1rem;
`;

export const StyledNextButton = styled.button`
  ${buttonStyles}
  margin-left: 1rem;
`;

type PageNumberButtonProps = {
  activePageNumber?: boolean;
  bold?: boolean;
};

export const StyledPagenumberButton = styled.button<PageNumberButtonProps>`
  margin: 0 1rem;
  font-size: 1.6rem;
  border: none;
  background-color: transparent;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};

  ${({ activePageNumber }) =>
    activePageNumber &&
    css`
      color: var(--color-red);
      pointer-events: none;
    `}
`;

export const StyledDots = styled.span`
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
`;
