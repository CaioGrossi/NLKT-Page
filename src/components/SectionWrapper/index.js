import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  padding: 0 12rem;

  p {
    font-size: 2rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export default Wrapper;
