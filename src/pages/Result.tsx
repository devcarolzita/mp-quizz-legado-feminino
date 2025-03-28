import { useLocation } from "react-router-dom"
import ButtonCard from "../components/ButtonCard"
import { useEffect, useState } from "react";

const Result = () => {
  const location = useLocation();
  const [message, setNewMessage] = useState('');
  const queryParams = new URLSearchParams(location.search);
  const score = Number(queryParams.get("score")) || 0;
  useEffect(() => {
        if(score >= 4 ){
          setNewMessage('Excelente! Você é especialista em mulheres notáveis da história!')
        }else if (score >= 3 ){
          setNewMessage('Bom trabalho! Você tem um conhecimento razoável sobre mulheres notáveis.')
        } else {
          setNewMessage('Continue aprendendo sobre as mulheres que mudaram o mundo!')
        }
  }, []);
   
  return (
    <div  className="bg-black text-white rounded-2xl p-10 flex items-center flex-col max-w-md lg:max-w-sm text-center gap-5 ">
      <div className="flex flex-col items-center gap-2">
        <img src="./public/assets/trofeu.png" alt="" />
        <h2 className="text-lg font-bold">Quiz Concluído!</h2>
        <p className="text-4xl font-bold">{score}/5</p>
        <p className="text-xl">{message}</p>
    <div className="bg-gray-600/40 p-4 rounded my-4">
      <p className="font-bold">Você sabia ?</p>
      <p>Muitas das mulheres apresentadas neste quiz enfrentaram enormes desafios e preconceitos em suas épocas, mas mesmo assim conseguiram deixar um legado duradouro que inspirou gerações.</p>
    </div>
    <ButtonCard navigateLink="/" textLink="Iniciar quiz" />
      </div>
    </div>
  )
}

export default Result