import React from 'react';
import NLTKLogo from '../../images/nltk-logo.png';
import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <img src={NLTKLogo} alt="Logo da biblioteca NLTK" />
      <h1>Entenda como a biblioteca NLTK funciona com o Python.</h1>
    </S.Wrapper>
  );
};

export default Header;
