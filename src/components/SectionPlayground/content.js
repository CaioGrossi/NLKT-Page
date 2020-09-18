const commandsAndCodes = [
  {
    id: 0,
    command: "Importar a biblioteca NLTK",
    code: "import nltk"
  },

  {
    id: 1,
    command: "Fazer o dowload da biblioteca NLTK",
    code: "nltk.dowload()"
  },

  {
    id: 2,
    command: "Definir a sentença que vamos usar",
    code: "sentence = \"Python is the best language for data mining\" "
  },

  {
    id: 3,
    command: "Tokenizar a sentença escolhida e salvar",
    code: "tokens = nltk.word_tokenize(sentence)"
  },

  {
    id: 4,
    command: "Resultado da tokenização",
    code: "['Python', 'is', 'the', 'best', 'language', 'for', 'data', 'mining']"
  },

  {
    id: 5,
    command: "Resgatar as tags dos tokens já adquiridos",
    code: "tagged = nltk.pos_tag(tokens)"
  },

  {
    id: 6,
    command: "Resultado das tags",
    code: "[('Python', 'NNP'), ('is', 'VBZ'), ('the', 'DT'), ('best', 'JJS'), ('language', 'NN'), ('for', 'IN'), ('data', 'NNS'), ('mining', 'NN')]"
  }
]

export default commandsAndCodes;
