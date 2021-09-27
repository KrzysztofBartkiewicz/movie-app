import styled from 'styled-components';

export const StyledCard = styled.li`
  max-width: 30rem;
  margin: 1rem;
  color: var(--color-black);
  text-align: center;
`;

export const StyledImgWrapper = styled.div`
  position: relative;
`;

export const StyledBtnWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

export const StyledMovieImage = styled.img`
  width: 30rem;
  min-height: 45rem;
  border-radius: 3rem;
  box-shadow: 0px 7px 15px -2px rgba(0, 0, 0, 0.75);
`;

export const StyledMovieTitle = styled.h3`
  margin-top: 3.2rem;
  margin-bottom: 0.9rem;
  font-size: 3.2rem;
  font-weight: 600;
`;

export const StyledRateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledVotes = styled.span`
  margin-left: 0.5rem;
  font-size: 1.8rem;
  font-weight: 500;
`;
