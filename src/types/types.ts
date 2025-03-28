export type ButtonPropsType = {
  navigateLink: string,
  textLink: string,
  nextQuestion?: () => void,
  score?: number
}

export type typeData = {
  nome: string,
  id: number,
  ano_nascimento: string,
  ano_morte: string,
  contribuicao: string
}

export type typeNewQuestion = {
  nameWoman: string,
  description: string,
  options: string[]
}

export type newQuestion = {
  question: typeNewQuestion,
  nextQuestion: () => void,
  index: number,
}