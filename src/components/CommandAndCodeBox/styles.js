import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;
  font-size: 2.8rem;

  > svg {
    margin: 0 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > svg {
      margin: 3rem 0;
      transform: rotate(90deg);
    }
  }
`

export const Command = styled.div`
  cursor: pointer;

  &:hover {
    border-bottom: solid 0.5rem #ffd343;
  }
`

export const Code = styled.div`
  font-weight: bold;
`
