import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0.5rem;
  background-color: #2b6b84;

  > img {
    height: 12rem;
  }

  > h1 {
    font-size: 3.8rem;
  }

  @media (max-width: 768px) {
    justify-content: center;

    > h1 {
      display: none;
    }
  }
`;
