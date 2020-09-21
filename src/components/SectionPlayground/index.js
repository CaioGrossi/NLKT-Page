import React from 'react';
import * as S from './styles';
import Heading from '../Heading/index';
import CommandAndCodeBox from '../CommandAndCodeBox/index';
import Wrapper from '../SectionWrapper/index';

import commandsAndCodes from './content';

const SectionPlayground = () => {
  return (
    <Wrapper>
      <Heading>Playground</Heading>
      <S.Intructions>
        <p>
          Agora que ja foi apresentado a você o que é o Processamento de Linguagem Natural e como fazer isso usando a biblioteca
          NLKT junto ao python, vamos ter um pouco de interação para realmente fixar o que foi mostrado. Para testar, clique nas frases
          abaixo e veja qual seria a correspondência desse comando em código.
        </p>
      </S.Intructions>

      <S.InteractiveBox>
        {commandsAndCodes.map(commandAndCode => (
          <CommandAndCodeBox
            command={commandAndCode.command}
            code={commandAndCode.code}
            key={commandAndCode.id}
          />
        ))}
      </S.InteractiveBox>
    </Wrapper>
  );
}

export default SectionPlayground;
