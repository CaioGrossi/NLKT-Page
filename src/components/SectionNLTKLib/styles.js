import styled from 'styled-components';

export const Introduction = styled.div`
  margin: 2rem 0;
`;

export const WrapperDemonstrationBox = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }

`;

export const DemostrationBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  margin: 2rem;
  padding: 0.8rem;

  background-color: #eeeeec;
  border: .2rem solid black;
  border-radius: 2rem;

  > img {
    width: 37rem;
  }

  > span {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin: 2rem 0;
  }
`;
