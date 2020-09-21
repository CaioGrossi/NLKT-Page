import React from 'react';
import * as S from './styles';
import Heading from '../Heading/index';
import Wrapper from '../SectionWrapper/index';

import PLN from '../../images/pln-no-bg.png';
import PyramidStages from '../../images/pyramid-no-bg.png';

export const SectionIntroduction = () => {
  return (
    <Wrapper>
      <Heading>Introdução</Heading>
      <S.IntroductionBox>
        <p>
          Antes de falarmos especificamente sobre a biblioteca NLTK precisamos entender o que ela faz e com qual objetivo. A
          biblioteca foi criada com o intuito de estudar e processar as linguagens naturais, ou seja, a linguagem humana que nós
          falamos e escrevemos. Essa área da computação tem como objetivo extrair representações e significados mais complexos
          de textos escritos na linguagem natural, fazer o computador enteder a semântica e lexidade de textos. A aplicação real
          disso pode ser dada como exemplo em um corretor de textos, a partir do momento que o computador lê e consegue separar
          e entender a semântica e a lexidade deste texto, ele pode muito bem apontar os erros e corrigi-lo de acordo com as normas.
        </p>

        <img src={PLN} alt="Imagem ilustrativa de Processamento de linguagem natural" />
      </S.IntroductionBox>

      <S.IntroductionBox reverse>

        <p>
          Após  escolher o texto que sera analisado, ele passa pelos processos ilustrados na imagem ao lado. Primeiro a "tokenização" do
          texto que é a separação deste em palavras, nesse processo já há toda uma análise do texto para tokenizar ele da forma correta, sem erros
          por causa das pontuações, vírgulas ou abreviações. Segundo a análise sintatica, que consiste em relacionar as variantes morfológicas aos
          seus "lemas", as formas canônicas das palavras. Terceiro a análise semântica, que é extrair o significado e relação da frase num todo e resolver problemas
          como a anbiguidade. Um que não está ilustrado mas é presente é a análise pragmática, que é a análise de campo mais aberto do texto, relacionando este num todo, um exemplo
          seria de ele procurar refêrencias que faltam em uma frase em outras partes do texto.
        </p>

        <img src={PyramidStages} alt="Piramide demonstrando os estagios para fazer PLN" />
      </S.IntroductionBox>
    </Wrapper>
  );
}

export default SectionIntroduction;
