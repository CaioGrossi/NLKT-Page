import styled from 'styled-components';

export const IntroductionBox = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  > img {
    width: 30rem;
    margin: 0 1rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
     > img {
       margin: 1rem 0;
     }
  }
`;
