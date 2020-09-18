import React from 'react';
import * as S from './styles';

const Heading = ({ children }) => {
  return (
    <S.Wrapper>
      {children}
    </S.Wrapper>
  );
}

export default Heading;
