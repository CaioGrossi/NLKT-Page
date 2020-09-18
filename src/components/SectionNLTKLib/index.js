import React from 'react';
import * as S from './styles';
import Heading from '../Heading/index';
import Wrapper from '../SectionWrapper/index';

import TokenizeWordsExample from '../../images/tokenize-words.png';
import TaggedWordsExample from '../../images/tagged-words.png';
import TagsExample from '../../images/tags.png';


const SectionNLTKLib = () => {
  return (
    <Wrapper>
      <Heading>Usando a biblioteca NLTK para PLN</Heading>

      <S.nltkIntro>
        <p>
          Agora que já discutimos e que foi apresentado o que é PLN, vamos direto ao ponto. Vamos abordar como fazer PLN usando
          a biblioteca NLTK (Natural Language Toolkit) junto ao Python. Esta biblioteca faz exatamente o que discutimos na sessão de
          introdução, dada uma sentença ele faz o processo de tokenização, análise lexica, semantica e etc (focaremos na parte
          de tokenização). Abaixo há algumas imagens de linhas de código mostrando como é simples e intuitiva a tokenização de palavras usando a
          biblioteca. Antes de testar você deve ter python e a biblioteca instalada em sua máquina, se ainda não tiver
          siga <a href="https://www.nltk.org/install.html" target="_blank" rel="noopener noreferrer">esse</a> tutorial do site oficial da biblioteca.
        </p>
      </S.nltkIntro>

      <S.WrapperDemonstrationImages>
        <S.WrapperImage>
          <img src={TokenizeWordsExample} alt="Exemplo de tokenização de palvras usando NLTK" />
          <span>
            Nesse primeiro exemplo e código vemos a tokeninização das palvras por meio de função "word_tokenize",que recebe como
            argumento a string que você quer tokenizar.
          </span>
        </S.WrapperImage>

        <S.WrapperImage>
          <img src={TaggedWordsExample} alt="Exemplo de tags usadas na palavras ja separadas, classes gramaticais" />
          <span>
            Nesse segundo exemplo de código podemos ver como funciona o processo de colocar as tags (classes gramaticais) nos tokens,
            usando apenas a função "pos_tag" e passando os tokens capturados do retorno da ultima função.
          </span>
        </S.WrapperImage>

        <S.WrapperImage>
          <img src={TagsExample} alt="Exemplo de uma aŕvore de tags"/>
          <span>
            No ultimo exemplo de retornar as tags de cada palavra, vimos que ele retorna algumas abreviações que no final ficam como
            se fosse esse exemplo, uma árvore hirarquica de tags. Se quiser o signficado de cada uma,
            consulte <a href="https://cs.nyu.edu/grishman/jet/guide/PennPOS.html" target="_blank" rel="noopener noreferrer" >esse</a> site.
          </span>
        </S.WrapperImage>
      </S.WrapperDemonstrationImages>
    </Wrapper>
  );
}

export default SectionNLTKLib;
