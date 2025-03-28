import {  useEffect, useState } from "react"
import ButtonCard from "./ButtonCard"
import { newQuestion } from "../types/types"


const QuizCard = ({question, nextQuestion, index, handleAnswer, score}: newQuestion) => {
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [visibleAnswer, setVisibleAnswer] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const handleClick = (option: string) => {
    //se o option tiver correto, fica verde
    const isCorrect = option === question.nameWoman;
    if(visibleAnswer) return;
    setSelectedOption(option);
    setCorrectAnswer(isCorrect);
    setVisibleAnswer(true);
    handleAnswer(isCorrect)
  }

  const handleNextQuestin = () => {
    setSelectedOption(undefined);
    setCorrectAnswer(false);
    setVisibleAnswer(false);
    nextQuestion();
  }


  useEffect(() => {
    const shuffled = [...question.options].sort(() => 0.5 - Math.random());
    setShuffledOptions(shuffled);
  }, [question.options]);


  if(index === 5) {
    console.log('teste');
    
  }
  return (
    <div className="bg-black text-white rounded-2xl p-10 flex items-center flex-col max-w-md lg:max-w-sm text-center gap-5">
     
    <img src="./public/assets/coroa.png" alt="Ícone de coroa"  />
    <p>Pergunta {index} de 5</p>
    <h2 className="text-4xl font-bold">Qual alternativa descreve essa informação ?</h2>
    <p className="text-lg">{question.description}</p>
    <ul className="flex flex-wrap items-center justify-between gap-2">
    {shuffledOptions.map((element, index) =>  <li className={`p-4 rounded font-bold text-black cursor-pointer text-sm lg:w-[145px] truncate ${selectedOption === element ? 
      correctAnswer ? 'bg-green-300' : 'bg-red-300' : 'bg-purple-300'}`} onClick={() => handleClick(element)} key={index}>{element}</li>)}
    </ul>
    
    {visibleAnswer? (correctAnswer ? <p className="bg-green-300 p-4 rounded font-bold text-black cursor-pointer text-sm w-full">Correto</p> : <div className="bg-red-300 p-4 rounded text-black cursor-pointer text-sm w-full"> <p className="font-bold" >Incorreto! </p> <p>Essa informação é referente a {question.nameWoman}</p></div>) : '' }
    <ButtonCard navigateLink={index === 5 ? '/result' : '/quiz'} score={score} textLink='Próxima pergunta' nextQuestion = { handleNextQuestin}/>
</div>
  )
}

export default QuizCard