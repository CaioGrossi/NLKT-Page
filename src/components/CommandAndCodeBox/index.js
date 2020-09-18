import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import * as S from './styles';


const CommandAndCodeBox = ({ command, code }) => {

  const [isCodeVisible, setIsCodeVisible] = useState(false);

  const handleVisibeStateChange = () => {
    setIsCodeVisible(!isCodeVisible);
  }

  return (
    <S.Wrapper>
      <S.Command onClick={() => handleVisibeStateChange()}>
        <p>{command}</p>
      </S.Command>

      <AiOutlineArrowRight />

      {isCodeVisible &&
      <S.Code>
        <p>{code}</p>
      </S.Code>
      }
    </S.Wrapper>
  );
}


export default CommandAndCodeBox;
