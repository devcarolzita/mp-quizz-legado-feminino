import { useEffect, useState } from "react"
import QuizCard from "../components/QuizCard"
import { fetchUsers } from "../services/api"
import { typeData, typeNewQuestion } from "../types/types";

const PageCard = () => {
  const [data, setData] = useState<typeData[]>([]);
  const [newQuestions, setNewQuestions] = useState <typeNewQuestion []>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchUsers();
      setData(result.data);
    }
    getData()
  }, [])

  
  useEffect(() => {    
    if(data.length > 0) {
      const shuffledWomen = [...data].sort(() => Math.random() - 0.5);
      const questions = [];

      for(let index = 0; index <= 5; index +=1){
        const correctAnswer = shuffledWomen[index];
        const options = [correctAnswer.nome];
      

        while(options.length < 4){
          const randomWoman = shuffledWomen[Math.floor(Math.random() * shuffledWomen.length)];
          if(!options.includes(randomWoman.nome)){
            options.push(randomWoman.nome)
          }
        }
        questions.push({
          nameWoman: correctAnswer.nome,
          description: correctAnswer.contribuicao,
          options
        })
      }
      setNewQuestions(questions)
    }
  }, [data]);
  
  const nextQuestion = () => {    
    if(currentQuestionIndex < newQuestions.length -1 ){
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }
 
 
  
  return (
    <div>
      {newQuestions.length > 1 && 
      <QuizCard  question = {newQuestions[currentQuestionIndex]} nextQuestion={nextQuestion} index = { currentQuestionIndex} /> }
    </div>
    
  )
}

export default PageCard