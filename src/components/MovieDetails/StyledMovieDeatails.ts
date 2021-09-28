import styled from 'styled-components';

export const StyledMovieWrapper = styled.div`
  display: flex;
  max-width: 135rem;

  ${({ theme }) => theme.mq.xlBp} {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledMovieImage = styled.img`
  border-radius: 5rem;
  box-shadow: 0px 7px 15px -2px rgba(0, 0, 0, 0.75);

  ${({ theme }) => theme.mq.smBp} {
    width: 40rem;
    height: auto;
  }
`;

export const StyledImagePlaceholder = styled.img`
  width: 50rem;
  height: 75rem;
`;

export const StyledContentWrapper = styled.div`
  padding: 5rem;
  color: var(--color-black);

  ${({ theme }) => theme.mq.smBp} {
    padding: 1rem;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 600;

    ${({ theme }) => theme.mq.xlBp} {
      text-align: center;
    }
  }
`;

export const StyledOverviewWrapper = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    font-weight: 500;

    ${({ theme }) => theme.mq.xlBp} {
      text-align: center;
    }
  }

  span {
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--color-grey);
  }
`;

export const StyledCastWrapper = styled.div`
  h3 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    font-weight: 500;

    ${({ theme }) => theme.mq.xlBp} {
      text-align: center;
    }
  }

  ul {
    display: flex;

    ${({ theme }) => theme.mq.xlBp} {
      justify-content: center;
    }
  }
`;

export const StyledCastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;

  span {
    &:nth-child(1) {
      margin-bottom: 0.8rem;
      font-weight: 500;
    }
    &:nth-child(2) {
      color: var(--color-grey);
    }
  }

  ${({ theme }) => theme.mq.smBp} {
    font-size: 1.4rem;
  }
`;

type CastImageProps = {
  bgImage: string;
};

export const StyledCastImage = styled.div<CastImageProps>`
  width: 8rem;
  height: 8rem;
  margin-bottom: 1.2rem;
  border-radius: 100%;
  background-image: ${({ bgImage }) => bgImage};
  background-position: center;
  background-size: 8rem;
  background-repeat: no-repeat;

  ${({ theme }) => theme.mq.smBp} {
    width: 6rem;
    height: 6rem;
  }
`;

export const StyledGenresList = styled.ul`
  display: flex;
  margin-bottom: 4rem;
  font-size: 1.6rem;
  font-weight: 500;

  li {
    margin-right: 2rem;
  }

  ${({ theme }) => theme.mq.smBp} {
    flex-direction: column;
    align-items: center;
  }

  ${({ theme }) => theme.mq.xlBp} {
    justify-content: center;
  }
`;

export const StyledDetailsWWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 4rem;
  font-size: 1.6rem;
  color: var(--color-grey);

  & > span {
    margin-right: 4rem;
  }

  ${({ theme }) => theme.mq.xlBp} {
    justify-content: center;
  }
`;

export const StyledVotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;

  & > span {
    font-size: 1.2rem;
  }

  ${({ theme }) => theme.mq.xlBp} {
    justify-content: center;
  }
`;

export const StyledVotes = styled.span`
  font-size: 1.2rem;

  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
